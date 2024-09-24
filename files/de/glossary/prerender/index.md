---
title: Prerender
slug: Glossary/Prerender
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

Prerendering bezieht sich auf die Praxis des spekulativen {{Glossary("prefetch", "Vorabrufens")}} und _Renderns_ von Seiten, zu denen der Benutzer wahrscheinlich in naher Zukunft navigieren wird (der Browser rendert die Seite im Hintergrund in einem effektiv unsichtbaren separaten Tab). Prerendering umfasst das Herunterladen von Unterressourcen eines Dokuments und das Ausführen der zugehörigen JavaScripts.

Wenn der Benutzer dann beschließt, zu der Seite zu navigieren, kann deren Inhalt nahezu sofort angezeigt werden.

Prerendering könnte beispielsweise verwendet werden, um die Seitenressourcen abzurufen, die mit einem "Weiter"-Button verknüpft sind, oder einem Link-Popup, über das ein Benutzer fährt, oder das wahrscheinliche Seitenschutzziel der URL, die in die Adressleiste eingegeben wird. Die folgenden [Speculation Rules](/de/docs/Web/API/Speculation_Rules_API) könnten im Kopfbereich eines Dokuments enthalten sein, um dem Browser einen Hinweis zu geben, dass er `next.html` und `next2.html` prerendern sollte, da beide vernünftigerweise ein Ziel der nächsten Navigation sein könnten:

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

Das Prerendering führt zu einer schnelleren Anzeigedauer als das Vorabrufen und somit zu einer besseren Benutzererfahrung, allerdings auf Kosten eines höheren Ressourcenverbrauchs.

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("Prefetch")}}
- [Pages für sofortige Navigationen in Chrome prerendern](https://developer.chrome.com/docs/web-platform/prerender-pages#prerendering-from-the-address-bar) auf developer.chrome.com
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
