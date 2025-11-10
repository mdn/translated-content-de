---
title: Challenge-Response-Authentifizierung
slug: Glossary/Challenge
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In Sicherheitsprotokollen ist eine **Challenge** (Herausforderung) eine Anforderung, die vom Server an den Client gesendet wird, um bei jeder Anfrage eine andere Antwort zu generieren. Challenge-Response-Protokolle sind ein Weg, um gegen {{Glossary("replay_attack", "Replay-Angriffe")}} vorzugehen, bei denen ein Angreifer vorherige Nachrichten belauscht und sie zu einem späteren Zeitpunkt erneut sendet, um dieselben Zugangsdaten wie die ursprüngliche Nachricht zu erhalten.

Das [HTTP-Authentifizierungsprotokoll](/de/docs/Web/HTTP/Guides/Authentication) basiert auf Challenge-Response, wobei das "Basic"-Protokoll jedoch keine echte Challenge verwendet (der Bereich ist immer derselbe).

## Siehe auch

- [Challenge-Response-Authentifizierung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) auf Wikipedia.
