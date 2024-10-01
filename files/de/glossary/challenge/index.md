---
title: Challenge-Response-Authentifizierung
slug: Glossary/Challenge
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

In Sicherheitsprotokollen ist eine **Challenge** eine Art von Daten, die vom Server an den Client gesendet werden, um jedes Mal eine andere Antwort zu erzeugen. Challenge-Response-Protokolle sind eine Möglichkeit, {{Glossary("replay_attack", "Replay-Angriffe")}} zu bekämpfen, bei denen ein Angreifer frühere Nachrichten abhört und zu einem späteren Zeitpunkt erneut sendet, um dieselben Anmeldedaten wie die ursprüngliche Nachricht zu erhalten.

Das [HTTP-Authentifizierungsprotokoll](/de/docs/Web/HTTP/Authentication) basiert auf Challenge-Response, obwohl das "Basic"-Protokoll keine echte Challenge verwendet (der Realm bleibt immer gleich).

## Siehe auch

- [Challenge-Response-Authentifizierung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) auf Wikipedia.
