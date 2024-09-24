---
title: Vorabruf
slug: Glossary/Prefetch
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Beim Vorabruf geht es darum, Dokumente oder Unterressourcen spekulativ im Hintergrund abzurufen, für die Seiten, zu denen der Benutzer in naher Zukunft _voraussichtlich_ navigieren wird. Dies kann die Ladezeit der vorab geladenen Seite erheblich verkürzen, wenn der Benutzer sich entscheidet, zu ihr zu navigieren. Der Vorabruf könnte beispielsweise verwendet werden, um die Seite abzurufen, die durch einen „Weiter“-Button verlinkt ist, oder ihre Unterressourcen, oder ein Link-Popup, über das ein Benutzer schwebt, oder Suchergebnisse.

### Ressourcenvorabruf

Ressourcen sollten basierend darauf vorab geladen werden, wie wahrscheinlich es ist, dass sie bei einer zukünftigen Navigation benötigt werden. Browser können dies automatisch für einige Ressourcen ableiten, wie z.B. die aktuelle URL in der Adressleiste.

Dies kann durch Verwendung von [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) erfolgen (die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) behandelt nur Dokumenten-Vorabrufe für Navigationen):

```html
<link rel="prefetch" href="next.html" />
```

### Dokumentenvorabruf

Entwickler können dem Browser Hinweise auf die Navigationen geben, die vorab abgerufen werden sollten, auf verschiedene Arten:

[`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch):

```html
<link rel="prefetch" href="next.html" />
```

[Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Vorabruf:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html"]
      }
    ]
  }
</script>
```

Die Speculation Rules API behandelt Dokumenten-Vorabrufe für Navigationen viel besser als `<link rel="prefetch">`; erstere wurde speziell für diesen Zweck entwickelt, während letztere eine Reihe von Einschränkungen hat; siehe [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) für Details.

### DNS-Vorabruf

[DNS-Vorabruf](/de/docs/Web/HTML/Attributes/rel/dns-prefetch) löst Domainnamen im Voraus auf und beschleunigt die Ladezeiten, indem die Zeit für die Domänensuche zum Anforderungszeitpunkt reduziert wird.

```html
<link rel="dns-prefetch" href="https://example.com/" />
```

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("Prerender")}}
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
