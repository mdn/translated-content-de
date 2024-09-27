---
title: "!important"
slug: Web/CSS/important
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Ein `!`-Trennzeichen gefolgt vom Schlüsselwort `important` kennzeichnet die Deklaration als wichtig. Das `!important`-Flag verändert die Regeln, die Deklarationen innerhalb des [Kaskadenprinzips](/de/docs/Web/CSS/Cascade) auswählen. Eine Deklaration, die nicht _wichtig_ ist, wird als _normal_ bezeichnet.

Um eine Deklaration als wichtig zu markieren, fügen Sie das _important flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Während Leerzeichen zwischen dem Trennzeichen und dem Schlüsselwort erlaubt sind, wird das Flag generell als `!important` ohne Leerzeichen geschrieben.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

Das `!important` folgt nach dem Wert des Eigenschaftswertpaar-Deklaration, vorausgesetzt von mindestens einem Leerzeichen. Das wichtige Flag muss das letzte Token in der Deklaration sein. Mit anderen Worten, es können Leerzeichen und Kommentare zwischen dem Flag und dem abschließenden Semikolon der Deklaration stehen, aber nichts anderes.

## Auswirkungen auf die Kaskade

Wenn es um wichtige Deklarationen geht, werden die [Kaskadenursprungs- und Schichtenreihenfolgen](/de/docs/Web/CSS/Cascade) umgekehrt. Ohne das wichtige Flag überschreiben Deklarationen in den Autoren-Stylesheets Deklarationen in einem Benutzer-Stylesheet, das wiederum Deklarationen im Standard-Stylesheet des User-Agents überschreibt.

Wenn eine Deklaration wichtig ist, wird die Reihenfolge der Priorität umgekehrt. Deklarationen, die im User-Agent-Stylesheet als wichtig markiert sind, überschreiben alle wichtigen Deklarationen in den Benutzer-Stylesheets. Ebenso überschreiben alle wichtigen Deklarationen in den Benutzer-Stylesheets alle wichtigen Deklarationen in den Autoren-Stylesheets. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist nicht in [@keyframes-Animationen](/de/docs/Web/CSS/@keyframes) gültig.

Das Umkehren der Prioritätsreihenfolge für wichtige Deklarationen stellt sicher, dass Benutzer mit besonderen Bedürfnissen, wie z. B. personalisierte Farbschemata oder große Schriftarten, Autorenstile überschreiben können, indem sie einige Deklarationen in ihrem Benutzer-Stylesheet als wichtig markieren. Es garantiert auch, dass bösartige Erweiterungen wichtige User-Agent-Styles nicht überschreiben können, was die Funktionalität beeinträchtigen oder die Sicherheit negativ beeinflussen könnte.

Hat etwas Vorrang vor wichtigen Deklarationen? Ja, [Transitionen](/de/docs/Web/CSS/CSS_transitions). CSS-Transitionen sind eine Möglichkeit, die Geschwindigkeit zu kontrollieren, mit der die Eigenschaft von einem Wert zu einem anderen wechselt. Während des Übergangs von einem Wert zu einem anderen entspricht eine Eigenschaft nicht einer bestimmten wichtigen Deklaration.

```css
a {
  color: red !important;
  background-color: yellow;
  transition: all 2s linear;
}
a:hover {
  color: blue !important;
  background-color: orange !important;
}
```

In diesem Beispiel wechseln die Eigenschaften `color` und `background-color` über zwei Sekunden in den Hover-Zustand. Auch wenn die Standardzustände normale Deklarationen und die Hover-Zustände `!important`-Deklarationen sind, findet die Transition statt.

### Kaskadenschichten

Innerhalb der drei Ursprünge für Stylesheets – Autor, Benutzer und User-Agent – überschreiben normale Deklarationen in nicht geschichteten Stilen geschichtete Stil-Deklarationen, wobei die zuletzt deklarierte Vorrang vor den zuvor deklarierten Schichten hat. Wichtige Deklarationen kehren die Reihenfolge der Priorität um: Wichtige Deklarationen in der ersten Schicht haben Vorrang vor wichtigen Deklarationen in der nächsten Schicht und so weiter. Außerdem haben alle wichtigen Deklarationen Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht gemacht wurden.

### Inline-Stile

Inline-Stile sind Stile, die mit den [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributen definiert sind. Sie können auch normal oder wichtig sein. Inline-_normale_ Stile haben Vorrang vor allen _normalen_ Deklarationen, unabhängig vom Ursprung. Inline-_wichtige_ Stile haben Vorrang vor allen anderen _wichtigen_ Autorenstilen, unabhängig von der Schicht, aber wichtige Stile aus Stylesheets des Benutzers oder des User-Agents und Transitionen überschreiben diese.

### !important und Spezifität

Obwohl `!important` nicht Teil der Bestimmung von Spezifität ist, steht es damit in Zusammenhang. Wichtige Deklarationen überschreiben alle anderen Deklarationen derselben [Herkunft und Kaskadenschicht](/de/docs/Web/CSS/Cascade).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall von übermäßiger Spezifizierung eines Selektors. Unabhängig davon, wie hoch die Selektorspezifizität eine normale Deklaration trifft, wird eine wichtige Deklaration derselben Quelle und Kaskadenschicht immer Vorrang haben. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen derselben Herkunft und Schicht auf dasselbe Element angewendet werden, wählen Browser die Deklaration mit der höchsten Spezifität aus und verwenden sie.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall spielt die Selektorspezifität eine Rolle. Nur wenn die Selektoren die gleiche Spezifität hätten, würde die Quellreihenfolge eine Rolle spielen.

## Auswirkungen auf Kurzform-Eigenschaften

Deklarieren einer Kurzform-Eigenschaft mit `!important` setzt alle Untereigenschaften als wichtig. Die beiden folgenden Selektorstile-Blöcke sind gleichwertig:

```css
p {
  background: blue !important;
}

p {
  background-image: none !important;
  background-position: 0 0 !important;
  background-size: auto auto !important;
  background-repeat: repeat !important;
  background-origin: padding-box !important;
  background-clip: border-box !important;
  background-attachment: scroll !important;
  background-color: blue !important;
}
```

Dieses Beispiel zeigt einen der mehreren Gründe, warum das Vermeiden des wichtigen Flags generell empfohlen wird.

## Auswirkungen auf benutzerdefinierte Eigenschaften

Wenn das `!important`-Flag zu einer Wertzuweisung einer benutzerdefinierten Eigenschaft hinzugefügt wird, macht es die Wertzuweisung wichtig. Das `!important`-Flag wird dann aus dem Wert der benutzerdefinierten Eigenschaft entfernt. Das `!important`-Flag wird nicht als Teil des Benutzereigenschaftswertes an die [`var()`](/de/docs/Web/CSS/var)-Funktion übergeben.

```css
:root {
  --myColor: red !important;
  --myColor: blue;
}
p {
  color: var(--myColor);
}
blockquote {
  color: var(--myColor);
  color: purple;
}
```

```html hidden
<p>This is a paragraph</p>
<blockquote>This is a blockquote</blockquote>
```

In diesem Beispiel wird der Absatz rot und nicht blau, da die Zuweisung des benutzerdefinierten Eigenschaftswertes wichtig ist. Das Blockzitat wird lila, weil die lila normale Deklaration nach der normalen roten Deklaration kommt.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Best Practices

Vermeiden Sie die Verwendung von `!important`, um die Spezifität zu überschreiben. Wenn absichtlich wichtige Deklarationen für UI-Anforderungen erstellt werden, kommentieren Sie in Ihrem CSS-Code, um den Wartenden zu erklären, warum sie dieses Merkmal nicht überschreiben sollten.

Auch wenn Sie daran arbeiten, hoch spezifizierte Stile zu überschreiben, die nicht unter Ihrer Kontrolle stehen, wie z. B. Stile in einem Drittanbieter-Plugin, das mit einem [ID-Selektor](/de/docs/Web/CSS/ID_selectors) deklariert ist, müssen Sie `!important` nicht verwenden. Erwägen Sie stattdessen, das Skript des Drittanbieter-Stylesheets in eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) als Ihre erste Kaskadenschicht zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen beinhalten, haben Ihre Styles Vorrang vor den Widget-Stilen, unabhängig von der Spezifität.

Wenn Sie ein externes Stylesheet mit wichtigen Deklarationen überschreiben müssen, erstellen Sie eine Kaskadenschicht, die die erforderlichen Überschreibungen enthält, und deklarieren Sie diese Schicht zuerst.

### Barrierefreiheitsüberlegungen

Wichtige Stile aus einem Benutzer-Stylesheet haben Vorrang vor den wichtigen Deklarationen des Autoren-Stylesheets, was bedeutet, dass das Hinzufügen eines `!important`-Flags zu den Stilen einer Seite nicht verhindert, dass einzelne Benutzer mit besonderen Anforderungen, wie z. B. große Schriftarten, Ihre Stile durch das Hinzufügen von wichtigen Stilen in ihrem eigenen Benutzer-Stylesheet überschreiben können.

## Browser-Kompatibilität

Diese Funktion wird in allen Browsern unterstützt.

## Siehe auch

- [CSS Spezifität](/de/docs/Web/CSS/Specificity)
- [CSS Kaskade](/de/docs/Web/CSS/Cascade)
