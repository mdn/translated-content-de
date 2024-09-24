---
title: "!wichtig"
slug: Web/CSS/important
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Ein `!`-Begrenzer, gefolgt vom Schlüsselwort `important`, kennzeichnet die Deklaration als wichtig. Das `!important`-Flag ändert die Regeln, die Deklarationen innerhalb der [Kaskade](/de/docs/Web/CSS/Cascade) auswählen. Eine nicht _wichtige_ Deklaration wird als _normal_ bezeichnet.

Um eine Deklaration als wichtig zu markieren, fügen Sie das _wichtig-Flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Während Leerzeichen zwischen dem Begrenzer und dem Schlüsselwort erlaubt sind, wird das Flag allgemein als `!important` ohne Leerzeichen geschrieben.

```css-nolint
selector {
  property: value; /* normale Deklaration */
  property: value !important; /* wichtige Deklaration (bevorzugt) */
  property: value ! important; /* wichtige Deklaration (nicht bevorzugt) */
}
```

Das `!important` steht nach dem Wert des Eigenschafts-Wert-Paar-Deklaration, gefolgt von mindestens einem Leerzeichen. Das wichtig-Flag muss das letzte Token in der Deklaration sein. Mit anderen Worten, es können Leerzeichen und Kommentare zwischen dem Flag und dem abschließenden Semikolon der Deklaration stehen, aber sonst nichts.

## Auswirkung auf die Kaskade

Bei wichtigen Deklarationen werden die [Kaskadenherkunfts- und -schichtreihenfolgen](/de/docs/Web/CSS/Cascade) umgekehrt. Ohne das wichtig-Flag überschreiben Deklarationen in den Stylesheets des Autors die Deklarationen eines Benutzer-Stylesheets, das wiederum die Deklarationen im Standard-Stylesheet des User-Agents überschreibt.

Wenn eine Deklaration wichtig ist, wird die Reihenfolge des Vorrangs umgekehrt. Deklarationen, die in den Stylesheets des User-Agents als wichtig markiert sind, überschreiben alle wichtigen Deklarationen in den Benutzer-Stylesheets. Ebenso überschreiben alle wichtigen Deklarationen in den Benutzer-Stylesheets alle wichtigen Deklarationen in den Autor-Stylesheets. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist innerhalb von [@keyframes Animationen](/de/docs/Web/CSS/@keyframes) nicht gültig.

Das Umkehren der Vorrangsordnung für wichtige Deklarationen stellt sicher, dass Benutzer mit speziellen Bedürfnissen, wie personalisierte Farbschemata oder große Schriften, die Autorstile überschreiben können, wenn nötig, indem sie einige Deklarationen in ihrem Benutzer-Stylesheet als wichtig markieren. Es garantiert auch, dass schädliche Erweiterungen wichtige User-Agent-Styles nicht überschreiben können, was die Funktionalität beeinträchtigen oder die Sicherheit negativ beeinflussen könnte.

Hat irgendetwas Vorrang vor wichtigen Deklarationen? Ja, [Transitionen](/de/docs/Web/CSS/CSS_transitions). CSS-Transitionen sind eine Möglichkeit, die Geschwindigkeit zu steuern, mit der sich eine Eigenschaft von einem Wert zum anderen ändert. Während der Übergang von einem Wert zum anderen erfolgt, wird eine Eigenschaft keine spezifische wichtige Deklaration erfüllen.

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

In diesem Beispiel werden die `color`- und `background-color`-Eigenschaften in den Hover-Zustand über zwei Sekunden hinweg übergehen. Auch wenn der Standardzustand normale Deklarationen sind und die Hover-Zustände `!important`-Deklarationen sind, findet die Transition statt.

### Kaskadenschichten

Innerhalb jeder der drei Ursprünge für Stylesheets – Autor, Benutzer und User-Agent – überschreiben normale Deklarationen in ungeschichteten Stilen geschichtete Stil-Deklarationen, wobei die zuletzt deklarierten Vorrang vor den zuvor deklarierten Schichten haben. Wichtige Deklarationen kehren die Vorrangsordnung um: Wichtige Deklarationen in der ersten Schicht haben Vorrang vor wichtigen Deklarationen in der nächsten Schicht und so weiter. Auch haben alle wichtigen Deklarationen Vorrang vor wichtigen Deklarationen außerhalb einer Schicht.

### Inline-Styles

Inline-Styles sind Stile, die mithilfe der [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribute definiert sind. Sie können sowohl normal als auch wichtig sein. Inline _normale_ Styles haben Vorrang vor allen _normalen_ Deklarationen, egal welcher Herkunft. Inline _wichtige_ Styles haben Vorrang vor allen anderen _wichtigen_ Styles des Autos, egal welcher Schicht, aber wichtige Styles aus Benutzer- oder User-Agent-Stylesheets und Transitionen überschreiben sie.

### !important und Spezifität

Obwohl `!important` nicht Teil der Bestimmung der Spezifität ist, steht es damit in Beziehung. Wichtige Deklarationen überschreiben alle anderen Deklarationen aus demselben [Ursprung und Kaskadenschicht](/de/docs/Web/CSS/Cascade).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall der Über-Spezifizierung eines Selektors. Egal, wie hoch die [Spezifität](/de/docs/Web/CSS/Specificity) eines Selektors mit einer normalen Deklaration übereinstimmt, eine wichtige Deklaration aus derselben Quelle und Kaskadenschicht wird immer Vorrang haben. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen aus demselben Ursprung und derselben Schicht auf dasselbe Element angewendet werden, wählen und verwenden Browser die Deklaration mit der höchsten Spezifität.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall zählt die Selektor-Spezifität. Nur wenn die Selektoren die gleiche Spezifität haben, würde die Quellreihenfolge zählen.

## Auswirkung auf Kurzschreibweise-Eigenschaften

Die Deklaration einer Kurzschreibweise-Eigenschaft mit `!important` setzt alle Untereigenschaften als wichtig. Die beiden folgenden Selektor-Stilblöcke sind gleichwertig:

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

Dieses Beispiel zeigt einen der vielen Gründe, warum das Vermeiden des Wichtigkeits-Flags allgemein empfohlen wird.

## Auswirkung auf benutzerdefinierte Eigenschaften

Wenn das `!important`-Flag zu einer Wertedeklaration einer benutzerdefinierten Eigenschaft hinzugefügt wird, macht es die Wertzuweisung wichtig. Das `!important`-Flag wird dann aus dem Wert der benutzerdefinierten Eigenschaft entfernt. Das `!important`-Flag wird nicht als Teil des Werts der benutzerdefinierten Eigenschaft an die [`var()`](/de/docs/Web/CSS/var)-Funktion weitergegeben.

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
<p>Dies ist ein Absatz</p>
<blockquote>Dies ist ein Zitatblock</blockquote>
```

In diesem Beispiel wird der Absatz rot und nicht blau sein, da die Wertzuweisung der benutzerdefinierten Eigenschaft wichtig ist. Das Zitat wird lila sein, weil die lila normale Deklaration nach der normalen roten Deklaration kommt.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Beste Praktiken

Vermeiden Sie die Verwendung von `!important`, um Spezifität zu überschreiben. Wenn absichtlich wichtige Deklarationen für UI-Anforderungen erstellt werden, kommentieren Sie in Ihrem CSS-Code, um den Wartenden zu erklären, warum sie dieses Feature nicht überschreiben sollten.

Auch wenn Sie daran arbeiten, hochspezifische Stile zu überschreiben, die nicht unter Ihrer Kontrolle stehen, wie z.B. Stile in einem 3rd-Party-Plugin, das mit einem [ID-Selektor](/de/docs/Web/CSS/ID_selectors) deklariert ist, müssen Sie `!important` nicht verwenden. Erwägen Sie stattdessen, das 3rd-Party-Stylesheet-Skript in eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) als Ihre erste Kaskadenschicht zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen enthalten, werden Ihre Stile Vorrang vor den Widget-Stilen haben, egal wie spezifisch sie sind.

Wenn Sie ein externes Stylesheet überschreiben müssen, das wichtige Deklarationen enthält, erstellen Sie eine Kaskadenschicht, die die erforderlichen Überschreibungen enthält, und deklarieren Sie diese Schicht zuerst.

### Barrierefreiheitsfragen

Wichtige Stile aus einem Benutzer-Stylesheet haben Vorrang vor den wichtigen Deklarationen des Autoren-Stylesheets, was bedeutet, dass das Hinzufügen eines `!important`-Flags zu den Stilvorlagen einer Website einzelne Benutzer mit speziellen Anforderungen, wie z.B. große Schriften, nicht daran hindert, Ihre Stile durch das Hinzufügen wichtiger Stile in ihrem eigenen Benutzer-Stylesheet zu überschreiben.

## Browser-Kompatibilität

Diese Funktion wird in allen Browsern unterstützt.

## Siehe auch

- [CSS-Spezifität](/de/docs/Web/CSS/Specificity)
- [CSS-Kaskade](/de/docs/Web/CSS/Cascade)
