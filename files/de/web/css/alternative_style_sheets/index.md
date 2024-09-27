---
title: Alternative Stylesheets
slug: Web/CSS/Alternative_style_sheets
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das Spezifizieren von **alternativen Stylesheets** in einer Webseite bietet den Nutzern die Möglichkeit, zwischen mehreren Versionen einer Seite zu wählen, basierend auf ihren Bedürfnissen oder Vorlieben.

> [!NOTE]
> Diese Funktion wird in Browsern ohne Erweiterung nicht gut unterstützt. Um alternative Darstellungen anzubieten, die mit den bestehenden Präferenzen eines Nutzers funktionieren, siehe die CSS [Media-Features](/de/docs/Web/CSS/@media#media_features) {{cssxref("@media/prefers-color-scheme","prefers-color-scheme")}} und {{cssxref("@media/prefers-contrast","prefers-contrast")}}.

Firefox ermöglicht dem Nutzer die Auswahl des Stylesheets über das Untermenü _Ansicht > Seitenstil_. Andere Browser benötigen eine Erweiterung, um diese Funktionalität zu aktivieren. Die Webseite kann auch eine eigene Benutzeroberfläche bereitstellen, um dem Nutzer das Wechseln der Styles zu ermöglichen.

## Ein Beispiel: Die alternativen Stylesheets spezifizieren

Die alternativen Stylesheets werden üblicherweise mit einem {{HTMLElement("link")}}-Element unter Verwendung der Attribute `rel="alternate stylesheet"` und `title="…"` spezifiziert. Zum Beispiel:

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

In diesem Beispiel werden die Styles "Default Style", "Fancy" und "Basic" im Untermenü _Seitenstil_ aufgelistet, wobei "Default Style" vorausgewählt ist. Wenn der Nutzer einen anderen Stil auswählt, wird die Seite sofort mit diesem Stylesheet neu gerendert.

Egal welcher Stil ausgewählt ist, die Regeln aus dem Stylesheet reset.css werden immer angewendet.

### Probieren Sie es aus

[Probieren Sie ein funktionierendes Beispiel hier aus](https://mdn.github.io/css-examples/alt-style-sheets/).

## Details

Jedes Stylesheet in einem Dokument fällt in eine der folgenden Kategorien:

- **Persistent** (hat `rel="stylesheet"`, kein `title=""`): wird immer auf das Dokument angewendet.
- **Preferred** (hat `rel="stylesheet"`, mit angegebenem `title="…"`): wird standardmäßig angewendet, aber {{domxref("StyleSheet.disabled", "disabled", "", 1)}} wenn ein alternatives Stylesheet ausgewählt wird. **Es kann nur ein bevorzugtes Stylesheet geben**, daher führt das Bereitstellen von Stylesheets mit unterschiedlichen Titelattributen dazu, dass einige von ihnen ignoriert werden.
- **Alternate** (`rel="alternate stylesheet"`, mit angegebenem `title="…"`): standardmäßig deaktiviert, kann ausgewählt werden.

Wenn Stylesheets mit einem `title`-Attribut im {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}}- oder {{HTMLElement("style")}}-Element referenziert werden, wird der Titel zu einem der angebotenen Auswahlmöglichkeiten für den Nutzer. Stylesheets, die mit dem gleichen `title` verknüpft sind, sind Teil der gleichen Wahl. Stylesheets, die ohne ein `title`-Attribut verknüpft sind, werden immer angewendet.

Verwenden Sie `rel="stylesheet"`, um auf das Standard-Stylesheet zu verlinken, und `rel="alternate stylesheet"`, um auf alternative Stylesheets zu verlinken. Dies weist den Browser darauf hin, welcher Stylesheet-Titel standardmäßig ausgewählt werden sollte, und lässt diese Standardauswahl in Browsern gelten, die alternative Stylesheets nicht unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
