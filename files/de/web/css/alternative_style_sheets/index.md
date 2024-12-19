---
title: Alternative Style Sheets
slug: Web/CSS/Alternative_style_sheets
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das Spezifizieren von **alternativen Style Sheets** auf einer Webseite ermöglicht es Benutzern, verschiedene Versionen einer Seite basierend auf ihren Bedürfnissen oder Vorlieben zu sehen.

> [!NOTE]
> Diese Funktion wird in Browsern ohne Erweiterung nicht gut unterstützt. Um alternative Präsentationen anzubieten, die mit den vorhandenen Präferenzen eines Benutzers funktionieren, siehe die CSS [Media Features](/de/docs/Web/CSS/@media#media_features) {{cssxref("@media/prefers-color-scheme","prefers-color-scheme")}} und {{cssxref("@media/prefers-contrast","prefers-contrast")}}.

Firefox erlaubt dem Benutzer, das Stylesheet über das Untermenü _Ansicht > Seitenstil_ auszuwählen. Andere Browser benötigen eine Erweiterung, um diese Funktionalität zu aktivieren. Die Webseite kann auch ihre eigene Benutzeroberfläche bereitstellen, um dem Benutzer das Wechseln der Styles zu ermöglichen.

## Ein Beispiel: Spezifikation der alternativen Stylesheets

Die alternativen Stylesheets werden üblicherweise mit einem {{HTMLElement("link")}}-Element angegeben, das die Attribute `rel="alternate stylesheet"` und `title="…"` enthält. Zum Beispiel:

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

In diesem Beispiel werden die Styles "Default Style", "Fancy" und "Basic" im Untermenü _Seitenstil_ aufgelistet, wobei "Default Style" vorab ausgewählt ist. Wenn der Benutzer einen anderen Stil auswählt, wird die Seite sofort mit diesem Stylesheet neu gerendert.

Unabhängig davon, welcher Stil ausgewählt ist, werden die Regeln aus dem Stylesheet reset.css immer angewendet.

### Probieren Sie es aus

[Probieren Sie hier ein funktionierendes Beispiel aus](https://mdn.github.io/css-examples/alt-style-sheets/).

## Details

Ein beliebiges Stylesheet in einem Dokument fällt in eine der folgenden Kategorien:

- **Persistent** (hat `rel="stylesheet"`, kein `title=""`): wird immer auf das Dokument angewendet.
- **Preferred** (hat `rel="stylesheet"`, mit angegebenem `title="…"`): wird standardmäßig angewendet, aber [disabled](/de/docs/Web/API/StyleSheet/disabled) wenn ein alternatives Stylesheet ausgewählt wird. **Es kann nur ein bevorzugtes Stylesheet geben**, daher führt das Angeben von Stylesheets mit unterschiedlichen Titelattributen dazu, dass einige ignoriert werden.
- **Alternate** (`rel="alternate stylesheet"`, mit angegebenem `title="…"`): standardmäßig deaktiviert, kann ausgewählt werden.

Wenn Stylesheets mit einem `title`-Attribut im {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}} oder {{HTMLElement("style")}}-Element referenziert werden, wird der Titel zu einer der Optionen, die dem Benutzer angeboten werden. Stylesheets, die mit demselben `title` verlinkt sind, sind Teil derselben Auswahl. Stylesheets, die ohne `title`-Attribut verlinkt sind, werden immer angewendet.

Verwenden Sie `rel="stylesheet"`, um auf den Standardstil zu verlinken, und `rel="alternate stylesheet"`, um auf alternative Stylesheets zu verlinken. Dies teilt dem Browser mit, welcher Stylesheet-Titel standardmäßig ausgewählt sein soll, und lässt diese Standardauswahl in Browsern gelten, die alternative Stylesheets nicht unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
