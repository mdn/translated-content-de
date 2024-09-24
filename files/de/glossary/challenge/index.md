---
title: Herausforderung-Antwort-Authentifizierung
slug: Glossary/Challenge
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

In Sicherheitsprotokollen ist eine **Herausforderung** eine Art von Daten, die vom Server an den Client gesendet werden, um jedes Mal eine andere Antwort zu generieren. Herausforderung-Antwort-Protokolle sind eine Möglichkeit, sich gegen {{glossary("replay attack", "Replay-Angriffe")}} zu wehren, bei denen ein Angreifer frühere Nachrichten abhört und sie später erneut sendet, um die gleichen Anmeldedaten wie die ursprüngliche Nachricht zu erhalten.

Das [HTTP-Authentifizierungsprotokoll](/de/docs/Web/HTTP/Authentication) basiert auf einem Herausforderung-Antwort-Verfahren, obwohl das "Basic"-Protokoll keine echte Herausforderung nutzt (das Realm ist immer dasselbe).

## Siehe auch

- [Herausforderung-Antwort-Authentifizierung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) auf Wikipedia.
