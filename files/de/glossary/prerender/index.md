---
title: Prerender
slug: Glossary/Prerender
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

Prerendering bezieht sich auf die Praxis des spekulativen {{Glossary("prefetch", "Prefetching")}} und _Renderns_ von Seiten, zu denen der Benutzer wahrscheinlich in naher Zukunft navigieren wird (der Browser rendert die Seite im Hintergrund in einem tatsächlich unsichtbaren separaten Tab). Prerendering umfasst das Herunterladen der Unterressourcen eines Dokuments und das Ausführen zugehöriger JavaScript.

Wenn der Benutzer sich dann entscheidet, zur Seite zu navigieren, kann die Anzeige ihres Inhalts nahezu sofort erfolgen.

Prerendering könnte beispielsweise verwendet werden, um die Seitenressourcen abzurufen, die mit einem "Weiter"-Button verlinkt sind, oder ein Link-Popup, über das ein Benutzer schwebt, oder das wahrscheinliche Seitenelement des in die Adressleiste eingegebenen URL. Die folgenden [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) könnten im Kopf eines Dokuments enthalten sein, um dem Browser einen Hinweis zu geben, dass er `next.html` und `next2.html` prerendern soll, da beide vernünftigerweise ein Ziel der nächsten Navigation sein könnten:

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"]
      }
    ]
  }
</script>
```

Prerendering führt zu schnelleren Anzeigezeiten als Prefetching und somit zu einer besseren Benutzererfahrung, jedoch auf Kosten eines höheren Ressourcenverbrauchs.

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("Prefetch", "Prefetch")}}
- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages#prerendering-from-the-address-bar) auf developer.chrome.com
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
