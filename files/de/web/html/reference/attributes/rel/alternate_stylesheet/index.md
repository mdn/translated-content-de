---
title: Alternatives Stylesheet
slug: Web/HTML/Reference/Attributes/rel/alternate_stylesheet
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`alternate stylesheet`** Schlüsselwortpaar, wenn es als Wert für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}}-Elements verwendet wird, gibt an, dass die Zielressource ein _alternatives Stylesheet_ ist. Das Spezifizieren von **alternativen Stylesheets** auf einer Webseite ermöglicht es Nutzern, verschiedene Versionen einer Seite basierend auf ihren Bedürfnissen oder Vorlieben zu sehen.

> [!NOTE]
> Diese Funktion wird in Browsern ohne Erweiterung nicht gut unterstützt. Um alternative Präsentationen anzubieten, die mit den vorhandenen Präferenzen eines Nutzers funktionieren, siehe die CSS [media features](/de/docs/Web/CSS/@media#media_features) {{cssxref("@media/prefers-color-scheme","prefers-color-scheme")}} und {{cssxref("@media/prefers-contrast","prefers-contrast")}}.

Firefox erlaubt es Nutzern, alternative {{Glossary("stylesheet", "Stylesheets")}} über das Untermenü _Ansicht > Seitenstil_ auszuwählen, das die Werte der [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribute anzeigt. Andere Browser erfordern eine Erweiterung, um diese Funktionalität zu aktivieren. Die Webseite kann auch ihre eigene Benutzeroberfläche bereitstellen, um Nutzern das Wechseln der Stile zu ermöglichen.

## Beispiele

### Spezifizieren von alternativen Stylesheets

Alternative Stylesheets werden unter Verwendung von {{HTMLElement("link")}}-Elementen mit `rel="alternate stylesheet"` und `title="…"` Attributen spezifiziert. Zum Beispiel:

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

In diesem Beispiel werden die Stile "Default Style", "Fancy" und "Basic" im Firefox _Page Style_-Untermenü aufgelistet, wobei "Default Style" vorausgewählt ist. Wenn der Nutzer einen anderen Stil auswählt, wird die Seite sofort mit diesem Stylesheet neu gerendert.

Unabhängig davon, welcher Stil ausgewählt ist, werden die Regeln aus dem `reset.css`-Stylesheet immer angewendet.

### Probieren Sie es aus

[Probieren Sie hier ein funktionierendes Beispiel aus](https://mdn.github.io/css-examples/alt-style-sheets/).

## Details

Jedes Stylesheet in einem Dokument fällt in eine der folgenden Kategorien:

- **Persistent** (hat `rel="stylesheet"`, kein `title=""`): wird immer auf das Dokument angewendet.
- **Preferred** (hat `rel="stylesheet"`, mit `title="…"` angegeben): wird standardmäßig angewendet, aber [deaktiviert](/de/docs/Web/API/StyleSheet/disabled), wenn ein alternatives Stylesheet ausgewählt wird. **Es kann nur ein bevorzugtes Stylesheet geben**, daher führt das Bereitstellen von Stylesheets mit unterschiedlichen Titelattributen dazu, dass einige ignoriert werden.
- **Alternate** (`rel="alternate stylesheet"`, mit `title="…"` angegeben): standardmäßig deaktiviert, kann ausgewählt werden.

In Fällen, in denen ein Stylesheet-Menü existiert, wird, wenn Stylesheets mit einem `title`-Attribut auf dem {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}} oder {{HTMLElement("style")}}-Element referenziert werden, der Titel zu einer der dem Nutzer angebotenen Optionen. Stylesheets, die ohne `title`-Attribut verlinkt sind, werden immer angewendet.

Verwenden Sie `rel="stylesheet"` um auf den Standardstil zu verlinken und `rel="alternate stylesheet"` um auf alternative Stylesheets zu verlinken. Dies teilt dem Browser mit, welcher Stylesheet-Titel standardmäßig ausgewählt werden soll, und wendet diese Standardauswahl in Browsern an, die keine alternativen Stylesheets unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS](/de/docs/Web/CSS)
- [Dynamische Styling-Informationen verwenden](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
