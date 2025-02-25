---
title: Prefetch
slug: Glossary/Prefetch
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{GlossarySidebar}}

Prefetching bezieht sich auf die Praxis, Dokumente oder Subressourcen spekulativ im Hintergrund abzurufen, für Seiten, zu denen der Benutzer _wahrscheinlich_ in naher Zukunft navigieren wird.
Dies kann die Ladezeit für die vorab abgerufene Seite erheblich verkürzen, wenn der Benutzer sich entscheidet, zu ihr zu navigieren.
Prefetching könnte zum Beispiel verwendet werden, um die Seite abzurufen, die mit einem "Weiter"-Button verlinkt ist, oder ihre Subressourcen, oder ein Link-Popup, über das ein Benutzer schwebt, oder Suchergebnisse.

### Ressourcen-Prefetching

Ressourcen sollten basierend darauf vorab abgerufen werden, wie wahrscheinlich es ist, dass sie in einer zukünftigen Navigation benötigt werden. Browser können dies für einige Ressourcen automatisch ableiten, wie z.B. die aktuelle URL in der Adressleiste.

Dies kann mit [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) durchgeführt werden (die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) behandelt nur Dokument-Prefetches für Navigationszwecke):

```html
<link rel="prefetch" href="next.html" />
```

### Dokument-Prefetching

Entwickler können dem Browser auf verschiedene Weisen Hinweise auf Navigationsvorgänge geben, die vorab abgerufen werden sollten:

[`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch):

```html
<link rel="prefetch" href="next.html" />
```

[Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Prefetch:

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

Die Speculation Rules API behandelt Dokument-Prefetches für Navigationen viel besser als `<link rel="prefetch">`; ersteres wurde speziell für diesen Zweck entwickelt, während letzteres eine Reihe von Einschränkungen aufweist; siehe [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) für Details.

### DNS-Prefetching

[DNS-Prefetching](/de/docs/Web/HTML/Attributes/rel/dns-prefetch) löst Domainnamen im Voraus auf, wodurch die Ladezeiten verkürzt werden, indem die mit der Domänenauflösung zur Anfragezeit verbundenen Zeiten reduziert werden.

```html
<link rel="dns-prefetch" href="https://example.com/" />
```

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("Prerender", "Prerender")}}
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
