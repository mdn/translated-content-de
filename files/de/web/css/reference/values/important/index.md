---
title: "!important"
slug: Web/CSS/Reference/Values/important
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Ein `!`-Trennzeichen gefolgt von dem Schlüsselwort `important` kennzeichnet die Deklaration als wichtig. Das `!important`-Flag ändert die Regeln zur Auswahl von Deklarationen innerhalb des [Cascading](/de/docs/Web/CSS/CSS_cascade/Cascade). Eine Deklaration, die nicht _important_ ist, wird _normal_ genannt.

Um eine Deklaration als wichtig zu markieren, fügen Sie das _important-Flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Während Leerzeichen zwischen dem Trennzeichen und dem Schlüsselwort erlaubt sind, wird das Flag im Allgemeinen ohne Leerzeichen als `!important` geschrieben.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

Das `!important` steht nach dem Wert des Eigenschaft-Wert-Paars in der Deklaration, mit null oder mehr Leerzeichen davor. Das important-Flag muss das letzte Token in der Deklaration sein. Mit anderen Worten, es können Leerzeichen und Kommentare zwischen dem Flag und dem abschließenden Semikolon der Deklaration stehen, aber nichts anderes.

## Auswirkungen auf das Kaskadieren

Bei wichtigen Deklarationen sind die [Herkunft und Schichtenreihenfolge der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) umgekehrt. Ohne das important-Flag überschreiben Deklarationen in den Autor-Stilblättern Deklarationen im Benutzer-Stilblatt, die wiederum Deklarationen im Standard-Stilblatt des Benutzeragenten überschreiben.

Wenn eine Deklaration wichtig ist, kehrt sich die Reihenfolge der Vorrangigkeit um. Deklarationen, die im Benutzeragenten-Stilblatt als wichtig markiert sind, überschreiben alle wichtigen Deklarationen in den Benutzer-Stilblättern. Ebenso überschreiben alle wichtigen Deklarationen in den Benutzer-Stilblättern alle wichtigen Deklarationen in den Autor-Stilblättern. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist innerhalb von [@keyframes animation](/de/docs/Web/CSS/Reference/At-rules/@keyframes)-Deklarationen nicht zulässig.

Das Umkehren der Vorrangordnung für wichtige Deklarationen stellt sicher, dass Benutzer mit speziellen Bedürfnissen, wie personalisierte Farbschemata oder großen Schriftarten, die Autorenstile überschreiben können, wenn es nötig ist, indem sie einige Deklarationen in ihrem Benutzer-Stilblatt als wichtig markieren. Es gewährleistet auch, dass bösartige Erweiterungen keine wichtigen Benutzeragenten-Stile überschreiben können, was die Funktionalität beeinträchtigen oder die Sicherheit negativ beeinflussen könnte.

Hat etwas Vorrang vor wichtigen Deklarationen? Ja, [Übergänge](/de/docs/Web/CSS/CSS_transitions). CSS-Übergänge sind eine Möglichkeit, die Geschwindigkeit zu steuern, mit der eine Eigenschaft von einem Wert zum anderen wechselt. Während der Übergang von einem Wert zum anderen stattfindet, wird eine Eigenschaft nicht mit einer bestimmten wichtigen Deklaration übereinstimmen.

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

In diesem Beispiel wechseln die Eigenschaften `color` und `background-color` beim Überfahren in den Hover-Zustand über zwei Sekunden. Obwohl die Standardzustände normale Deklarationen und die Hover-Zustände `!important`-Deklarationen sind, erfolgt der Übergang.

### Kaskadenschichten

Innerhalb jeder der drei Ursprünge von Stilblättern – Autor, Benutzer und Benutzeragent – überschreiben normale Deklarationen in nichtgeschichteten Stilen geschichtete Stil-Deklarationen, wobei die zuletzt erklärte Vorrang vor den zuvor erklärten Schichten hat. Wichtige Deklarationen kehren die Vorrangordnung um: Wichtige Deklarationen in der ersten Schicht haben Vorrang vor wichtigen Deklarationen in der nächsten Schicht und so weiter. Außerdem haben alle wichtigen Deklarationen Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht gemacht wurden.

### Inline-Stile

Inline-Stile sind Stile, die mit dem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut definiert werden. Sie können auch normal oder wichtig sein. Inline-_normale_ Stile haben Vorrang vor allen _normalen_ Deklarationen, unabhängig vom Ursprung. Inline-_wichtige_ Stile haben Vorrang vor allen anderen _wichtigen_ Autorenstilen, unabhängig von der Schicht, aber wichtige Stile aus Stilblättern des Benutzers oder des Benutzeragenten und Übergänge überschreiben sie.

### !important und Spezifität

Während `!important` nicht Teil der Bestimmung der Spezifität ist, ist es damit verbunden. Wichtige Deklarationen überschreiben alle anderen Deklarationen aus dem gleichen [Ursprung und Kaskadenschicht](/de/docs/Web/CSS/CSS_cascade/Cascade).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall des Über-Spezifizierens eines Selektors. Egal wie hoch die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) eines Selektors mit einer normalen Deklaration übereinstimmt, eine wichtige Deklaration aus der gleichen Quelle und Kaskadenschicht wird immer Vorrang haben. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen aus der gleichen Herkunft und Schicht auf dasselbe Element angewendet werden, wählen Browser die Deklaration mit der höchsten Spezifität aus und verwenden sie.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall macht die Selektorspezifität den Unterschied. Nur wenn die Selektoren die gleiche Spezifität hätten, würde die Quellreihenfolge eine Rolle spielen.

## Auswirkungen auf Kurzschreibweise-Eigenschaften

Das Deklarieren einer Kurzschreibweise-Eigenschaft mit `!important` setzt alle Untereigenschaften als wichtig. Die beiden folgenden Selektor-Stilblöcke sind gleichwertig:

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

Dieses Beispiel zeigt einen der mehreren Gründe, warum das Vermeiden des important-Flags in der Regel empfohlen wird.

## Auswirkungen auf benutzerdefinierte Eigenschaften

Wenn das `!important`-Flag zu einer benutzerdefinierten Eigenschaftswerterklärung hinzugefügt wird, macht es die Wertzuweisung wichtig. Das `!important`-Flag wird dann aus dem Wert der benutzerdefinierten Eigenschaft entfernt. Das `!important`-Flag wird nicht als Teil des Werts der benutzerdefinierten Eigenschaft an die [`var()`](/de/docs/Web/CSS/Reference/Values/var)-Funktion übergeben.

```css
:root {
  --my-color: red !important;
  --my-color: blue;
}
p {
  color: var(--my-color);
}
blockquote {
  color: var(--my-color);
  color: purple;
}
```

```html hidden
<p>This is a paragraph</p>
<blockquote>This is a blockquote</blockquote>
```

In diesem Beispiel wird der Absatz rot und nicht blau, da die Wertzuweisung der benutzerdefinierten Eigenschaft wichtig ist. Das Blockquote wird lila sein, weil die lila normale Deklaration nach der normalen roten Deklaration kommt.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Beste Praktiken

Vermeiden Sie die Verwendung von `!important`, um Spezifität zu überschreiben. Wenn Sie absichtlich wichtige Deklarationen für UI-Anforderungen erstellen, kommentieren Sie Ihren CSS-Code, um den Wartenden zu erklären, warum sie dieses Feature nicht überschreiben sollten.

Sogar wenn Sie daran arbeiten, hochspezifische Stile zu überschreiben, die nicht unter Ihrer Kontrolle stehen, wie zum Beispiel Stile in einem Drittanbieter-Plugin, das mit einem [ID-Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) deklariert ist, müssen Sie nicht `!important` verwenden. Ziehen Sie stattdessen in Betracht, das Drittanbieter-Stilblatt-Skript als Ihre erste Kaskadenschicht in eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen enthalten, werden Ihre Stile Vorrang vor den Widget-Stilen haben, unabhängig von der Spezifität.

Wenn Sie ein externes Stylesheet überschreiben müssen, das wichtige Deklarationen enthält, erstellen Sie eine Kaskadenschicht, die die erforderlichen Überschreitungen enthält, und deklarieren Sie diese Schicht zuerst.

### Barrierefreiheitsbedenken

Wichtige Stile aus einem Benutzer-Stilblatt haben Vorrang vor den wichtigen Deklarationen des Autoren-Stilblatts, d. h. das Hinzufügen eines `!important`-Flags zu den Stilen einer Website verhindert nicht, dass einzelne Benutzer mit speziellen Anforderungen, wie z. B. großen Schriftarten, Ihre Stile überschreiben können, indem sie wichtige Stile in ihr eigenes Benutzer-Stilblatt hinzufügen.

## Browser-Kompatibilität

Dieses Feature wird von allen Browsern unterstützt.

## Siehe auch

- [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
