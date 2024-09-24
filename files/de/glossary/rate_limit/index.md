---
title: Ratenlimitierung
slug: Glossary/Rate_limit
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{GlossarySidebar}}

In der Informatik, insbesondere im Bereich der Netzwerke, bedeutet **Ratenlimitierung** die Kontrolle darüber, wie viele Vorgänge in einem bestimmten Zeitraum durchgeführt werden können, um in der Regel zu vermeiden, dass das System überlastet wird und die Leistung beeinträchtigt wird. Beispielsweise könnte ein Server die Anzahl der Anfragen begrenzen, die er von einem einzelnen Client in einem bestimmten Zeitraum akzeptiert, was nicht nur die Gesamtleistung des Servers optimiert, sondern auch Angriffe wie {{glossary("DoS attack")}} abschwächt.

Ratenlimitierung ist typischerweise synonym mit {{glossary("throttle", "throttling")}}, obwohl {{glossary("debounce", "debouncing")}} eine weitere geeignete Strategie darstellt, die in bestimmten Fällen bessere Semantik und Benutzererfahrung bietet.

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Debounce")}}
  - {{Glossary("Throttle")}}
- {{HTTPStatus("429", "429 Too Many Requests")}}
- [Was ist Ratenlimitierung? | Ratenlimitierung und Bots](https://www.cloudflare.com/en-gb/learning/bots/what-is-rate-limiting/) auf cloudflare.com
