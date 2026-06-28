"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Bell, MessageCircle, Share2, Trophy, TrendingUp, Zap } from "lucide-react";

const stats = [
  { label: "World Ranking", value: "#4", icon: Trophy },
  { label: "Win Rate", value: "74%", icon: TrendingUp },
  { label: "Aces / Match", value: "8.3", icon: Zap },
];

const recentMatches = [
  { tournament: "Wimbledon", round: "Final", opponent: "C. Alcaraz", score: "6–4  3–6  7–6  6–3", result: "W" },
  { tournament: "Roland Garros", round: "Semi-final", opponent: "R. Nadal", score: "4–6  6–3  6–4  3–6  5–7", result: "L" },
  { tournament: "Australian Open", round: "Quarter-final", opponent: "D. Medvedev", score: "7–5  6–4  6–2", result: "W" },
  { tournament: "Miami Open", round: "Final", opponent: "J. Sinner", score: "6–3  7–5", result: "W" },
];

const surfaces = [
  { name: "Hard", wins: 38, losses: 12 },
  { name: "Clay", wins: 24, losses: 9 },
  { name: "Grass", wins: 17, losses: 5 },
];

export default function Home() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

          {/* Profile header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <Avatar className="size-24 rounded-2xl">
              <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="Alex Fontaine" />
              <AvatarFallback className="rounded-2xl text-2xl font-semibold">AF</AvatarFallback>
            </Avatar>

            <div className="flex flex-1 flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">Alex Fontaine</h1>
                <Badge variant="secondary">🇫🇷 France</Badge>
                <Badge>ATP #4</Badge>
              </div>
              <p className="text-muted-foreground">
                Right-handed · Professional since 2014 · Coached by Pierre Duval
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Button size="sm">
                  <Bell className="size-4" />
                  Follow
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="size-4" />
                  Message
                </Button>
                <Tooltip>
                  <TooltipTrigger render={<Button variant="ghost" size="icon" className="size-8" />}>
                    <Share2 className="size-4" />
                  </TooltipTrigger>
                  <TooltipContent>Share profile</TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Stats row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map(({ label, value, icon: Icon }) => (
              <Card key={label}>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="text-2xl font-semibold text-foreground">{value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="matches" className="mt-8">
            <TabsList>
              <TabsTrigger value="matches">Recent Matches</TabsTrigger>
              <TabsTrigger value="surfaces">By Surface</TabsTrigger>
            </TabsList>

            <TabsContent value="matches" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-medium">2024 Season</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {recentMatches.map((match, i) => (
                      <div key={i} className="flex items-center gap-4 px-6 py-4">
                        <Badge
                          variant={match.result === "W" ? "default" : "outline"}
                          className="w-6 justify-center"
                        >
                          {match.result}
                        </Badge>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground">
                            {match.tournament}
                            <span className="ml-2 text-sm font-normal text-muted-foreground">
                              {match.round}
                            </span>
                          </p>
                          <p className="text-sm text-muted-foreground">vs. {match.opponent}</p>
                        </div>
                        <p className="hidden text-sm font-mono text-muted-foreground sm:block">
                          {match.score}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="surfaces" className="mt-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {surfaces.map(({ name, wins, losses }) => (
                  <Card key={name}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">{name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                      <div className="flex items-end gap-2">
                        <span className="text-3xl font-semibold text-foreground">{wins}</span>
                        <span className="mb-1 text-sm text-muted-foreground">
                          – {losses} · {Math.round((wins / (wins + losses)) * 100)}%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${Math.round((wins / (wins + losses)) * 100)}%` }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </TooltipProvider>
  );
}
