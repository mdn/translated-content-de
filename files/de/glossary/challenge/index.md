---
title: Challenge-Response-Authentifizierung
slug: Glossary/Challenge
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

In Sicherheitsprotokollen ist eine **Challenge** (Herausforderung) eine vom Server an den Client gesendete Datenmenge, um bei jeder Anfrage eine andere Antwort zu erzeugen. Challenge-Response-Protokolle sind eine Möglichkeit, gegen {{Glossary("replay_attack", "Replay-Angriffe")}} vorzugehen, bei denen ein Angreifer vorherige Nachrichten abhört und zu einem späteren Zeitpunkt wieder sendet, um die gleichen Anmeldeinformationen wie die ursprüngliche Nachricht zu erhalten.

Das [HTTP-Authentifizierungsprotokoll](/de/docs/Web/HTTP/Guides/Authentication) basiert auf Challenge-Response, obwohl das "Basic"-Protokoll keine echte Challenge verwendet (das Realm bleibt immer gleich).

## Siehe auch

- [Challenge-Response-Authentifizierung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) auf Wikipedia.
