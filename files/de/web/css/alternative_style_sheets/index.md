---
title: Alternative Stylesheets
slug: Web/CSS/Alternative_style_sheets
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das Festlegen von **alternativen Stylesheets** auf einer Webseite ermöglicht es Benutzern, mehrere Versionen einer Seite zu sehen, basierend auf ihren Bedürfnissen oder Vorlieben.

> [!NOTE]
> Diese Funktion wird in Browsern ohne Erweiterung nicht gut unterstützt. Um alternative Präsentationen anzubieten, die mit den bestehenden Vorlieben eines Benutzers funktionieren, siehe die CSS [Medienmerkmale](/de/docs/Web/CSS/@media#media_features) {{cssxref("@media/prefers-color-scheme","prefers-color-scheme")}} und {{cssxref("@media/prefers-contrast","prefers-contrast")}}.

Firefox ermöglicht es dem Benutzer, das Stylesheet über das Untermenü _Ansicht > Seitenstil_ auszuwählen. Andere Browser benötigen eine Erweiterung, um diese Funktionalität zu aktivieren. Die Webseite kann auch ihre eigene Benutzeroberfläche bereitstellen, um dem Benutzer das Ändern der Stile zu ermöglichen.

## Ein Beispiel: die alternativen Stylesheets angeben

Die alternativen Stylesheets werden üblicherweise mit einem {{HTMLElement("link")}}-Element mit den Attributen `rel="alternate stylesheet"` und `title="…"` angegeben. Zum Beispiel:

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

In diesem Beispiel werden die Stile "Default Style", "Fancy" und "Basic" im Untermenü _Seitenstil_ aufgelistet, wobei "Default Style" vorausgewählt ist. Wenn der Benutzer einen anderen Stil auswählt, wird die Seite sofort mit diesem Stylesheet neu gerendert.

Unabhängig davon, welcher Stil ausgewählt ist, werden die Regeln aus dem reset.css-Stylesheet immer angewendet.

### Probieren Sie es aus

[Probieren Sie hier ein funktionierendes Beispiel aus](https://mdn.github.io/css-examples/alt-style-sheets/).

## Details

Jedes Stylesheet in einem Dokument fällt in eine der folgenden Kategorien:

- **Persistent** (hat `rel="stylesheet"`, kein `title=""`): wird immer auf das Dokument angewendet.
- **Preferred** (hat `rel="stylesheet"`, mit angegebenem `title="…"`): wird standardmäßig angewendet, aber {{domxref("StyleSheet.disabled", "deaktiviert", "", 1)}} wenn ein alternatives Stylesheet ausgewählt wird. **Es kann nur ein bevorzugtes Stylesheet geben**, sodass das Bereitstellen von Stylesheets mit unterschiedlichen Titelattributen dazu führt, dass einige von ihnen ignoriert werden.
- **Alternate** (`rel="alternate stylesheet"`, mit angegebenem `title="…"`): standardmäßig deaktiviert, kann ausgewählt werden.

Wenn Stylesheets mit einem `title`-Attribut im {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}} oder {{HTMLElement("style")}}-Element referenziert werden, wird der Titel zu einer der dem Benutzer angebotenen Auswahlmöglichkeiten. Mit demselben `title` verbundene Stylesheets sind Teil derselben Auswahl. Ohne ein `title`-Attribut verlinkte Stylesheets werden immer angewendet.

Verwenden Sie `rel="stylesheet"`, um auf den Standardstil zu verlinken, und `rel="alternate stylesheet"`, um auf alternative Stylesheets zu verlinken. Dies teilt dem Browser mit, welcher Stylesheet-Titel standardmäßig ausgewählt sein sollte, und sorgt dafür, dass diese Standardauswahl in Browsern gilt, die keine alternativen Stylesheets unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
