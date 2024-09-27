---
title: Prefetch
slug: Glossary/Prefetch
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Prefetching bezieht sich auf die Praxis, Dokumente oder Subressourcen spekulativ im Hintergrund abzurufen, für Seiten, zu denen der Nutzer wahrscheinlich in naher Zukunft navigieren wird. Dies kann die Ladezeit der vorab abgerufenen Seite erheblich verkürzen, falls der Nutzer sich entscheidet, zu ihr zu navigieren. Prefetching könnte beispielsweise verwendet werden, um die Seite abzurufen, die durch einen "Weiter"-Button verlinkt ist, oder deren Subressourcen, oder ein Link-Popup, über das ein Nutzer schwebt, oder Suchergebnisse.

### Ressourcen-Prefetching

Ressourcen sollten im Voraus abgerufen werden, basierend darauf, wie wahrscheinlich es ist, dass sie für eine zukünftige Navigation benötigt werden. Browser können dies für einige Ressourcen automatisch ableiten, wie z. B. die aktuelle URL in der Adressleiste.

Dies kann durch die Verwendung von [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) erfolgen (die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) behandelt nur Dokument-Prefetching für Navigationen):

```html
<link rel="prefetch" href="next.html" />
```

### Dokument-Prefetching

Entwickler können dem Browser auf unterschiedliche Arten Hinweise geben, welche Navigationen vorab abgerufen werden sollten:

[`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch):

```html
<link rel="prefetch" href="next.html" />
```

[Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prefetch:

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

Die Speculation Rules API behandelt Dokument-Prefetching für Navigationen viel besser als `<link rel="prefetch">`; erstere wurde speziell für diesen Zweck entwickelt, während letztere eine Reihe von Einschränkungen aufweist; siehe [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) für Details.

### DNS-Prefetching

[DNS-Prefetching](/de/docs/Web/HTML/Attributes/rel/dns-prefetch) löst Domain-Namen im Voraus auf und beschleunigt so die Ladezeiten, indem die mit der Domain-Suche zum Anforderungszeitpunkt verbundene Zeit verkürzt wird.

```html
<link rel="dns-prefetch" href="https://example.com/" />
```

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading)
- Verwandte Glossarbegriffe:
  - [Prerender](/de/docs/Glossary/Prerender)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
