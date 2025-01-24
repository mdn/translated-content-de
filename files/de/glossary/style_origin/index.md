---
title: Stilherkunft
slug: Glossary/Style_origin
l10n:
  sourceCommit: c9c86abc12c3bdd3fdb07c73a0d1cf88cdd0e1bc
---

{{GlossarySidebar}}

In {{Glossary("CSS", "CSS")}} gibt es drei Kategorien von Quellen für Stiländerungen. Diese Kategorien werden als **Stilherkünfte** bezeichnet. Sie sind die **User-Agent-Herkunft**, **Benutzerherkunft** und die **Autorherkunft**.

- User-Agent-Herkunft
  - : Die User-Agent-Herkunft ist die Stilherkunft, die aus den Standardstilen besteht, die vom Webbrowser des Benutzers verwendet werden. Wenn keine anderen Stile auf den Inhalt angewendet werden, werden beim Rendern von Elementen die Stile der User-Agent-Herkunft verwendet.
- Benutzerherkunft
  - : Die Benutzerherkunft ist die Stilherkunft, die alle CSS-Deklarationen enthält, die der Benutzer des Webbrowsers hinzugefügt hat. Diese können durch das Hinzufügen von Stilen mit einem Entwicklerwerkzeug oder durch eine Browsererweiterung stammen, die automatisch benutzerdefinierte Stile auf den Inhalt anwendet, wie z.B. [Stylus](https://add0n.com/stylus.html) oder [Stylish](https://userstyles.org/).
- Autorherkunft
  - : Die Autorherkunft ist die Stilherkunft, die alle Stile enthält, die Teil des Dokuments sind, sei es eingebettet im {{Glossary("HTML", "HTML")}} oder geladen aus einer externen Stylesheet-Datei.

Die Stilherkünfte werden verwendet, um zu bestimmen, wo das Zurückrollen (oder Rückverfolgen) der auf ein Element angewendeten Stil-Kaskade beendet wird, wenn Stile entfernt werden, z.B. bei Verwendung der Schlüsselwörter {{cssxref("unset")}} oder {{cssxref("revert")}}.

## Siehe auch

- [CSS-Kaskadierung und Vererbung: Kaskadenherkünfte](https://drafts.csswg.org/css-cascade-4/#cascading-origins)
