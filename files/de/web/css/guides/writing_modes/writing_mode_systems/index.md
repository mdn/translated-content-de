---
title: Einführung in Schreibmodus-Systeme
short-title: Introduction
slug: Web/CSS/Guides/Writing_modes/Writing_mode_systems
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSS unterstützt verschiedene Inhaltsrichtungen oder **Schreibmodi**, einschließlich von rechts nach links, von links nach rechts und von oben nach unten. Der Leitfaden gibt einen kurzen Überblick über Schreibmodus-Systeme und deren Richtungen.

## Block und Inline

Bevor die Richtung verschiedener Schriftsysteme untersucht wird, ist es wichtig, die Begriffe "Block" und "Inline" zu verstehen. Der Begriff **inline** bezieht sich darauf, wie Zeichen und Wörter innerhalb einer Zeile fließen. Der Begriff **block** bezieht sich darauf, wie Zeilen oder Inhaltsblöcke nebeneinander gestapelt werden. Der Schreibmodus des Dokuments bestimmt die Block- und Inline-Richtungen eines Dokuments. Sie basieren nicht auf physischen Richtungen wie links, rechts, oben und unten.

### Dimensionen und Richtungen

Alles auf einer Webseite wird entweder in der **Inline-** oder **Block-Dimension** angeordnet. Die _Inline-Dimension_ ist die Dimension, entlang der eine Textzeile im aktuellen Schreibmodus verläuft, während die _Block-Dimension_ die Dimension ist, in der Blöcke — wie Absätze — nacheinander angezeigt werden. Die Inline-Dimension ist senkrecht zur Block-Dimension.

In einem englischen Dokument, in dem der Text horizontal von links nach rechts verläuft, oder in einem arabischen Dokument, in dem der Text horizontal von rechts nach links verläuft, ist die Inline-Dimension horizontal, während die _Inline-Richtung_ jeweils links nach rechts und rechts nach links verläuft. In beiden Fällen ist die Block-Dimension vertikal, mit der _Block-Richtung_ von oben nach unten. In einem vertikalen Schreibmodus wie dem Japanischen ist die Inline-Dimension vertikal, da die Zeilen in diesem Schreibmodus vertikal verlaufen, während die Block-Dimension horizontal ist.

### Inline- und Block-Boxen

Der _External Display_ Typ der Boxen in einem [normalen Fließlayout](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model#normal_flow) bestimmt, wie die Box neben anderen Elementen auf der Seite funktioniert. _Inline-Boxen_ umschließen jede Textzeile und werden entlang der Inline-Dimension angeordnet.

_Block-Boxen_ repräsentieren Behälter auf der Seite, die andere Block- und Inline-Elemente enthalten können. Sie werden entlang der Block-Dimension angeordnet und erstrecken sich in der Inline-Dimension, um den gesamten in ihrem Behälter verfügbaren Raum zu füllen (vorausgesetzt, es wurde keine bestimmte Größe mithilfe einer Eigenschaft wie {{cssxref("inline-size")}} in der Inline-Dimension festgelegt). Block-Boxen werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der den Text horizontal anzeigt, wie im Englischen.

Das [CSS Logical Properties and Values Module](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties) definiert {{Glossary("flow_relative_values", "fluss-relative Zuordnungen")}} für viele der {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte in CSS, was hilfreich ist, um die [Grundkonzepte logischer Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts) zu verstehen.

### Inline-Basis- und Blockflussrichtungen

Die _Inline-Basisrichtung_ ist die primäre Richtung, in der der Inhalt in einer Zeile geordnet ist und definiert den "Start" und das "Ende" einer Zeile. Die {{cssxref("direction")}} Eigenschaft spezifiziert die Inline-Basisrichtung einer Box und bestimmt zusammen mit der {{cssxref("unicode-bidi")}} Eigenschaft und der inhärenten Richtung eines beliebigen Textinhalts die Reihenfolge des Inline-Inhalts innerhalb einer Zeile.

Die _Blockflussrichtung_ ist die Richtung, in der Block- und Linien-Boxen innerhalb eines Block-Containers gestapelt werden. Die {{cssxref("writing-mode")}} Eigenschaft bestimmt die Blockflussrichtung.

## Schreibsystem-Modi

Unterschiedliche Schreibsysteme haben unterschiedliche Schreibmodi. Ein horizontaler Schreibmodus ist einer mit horizontalen Textlinien, d.h., eine Blockfließrichtung nach unten oder oben. Ein vertikaler Schreibmodus ist einer mit vertikalen Textlinien, d.h., eine Blockfließrichtung nach links oder rechts.

Latein- und slawisch-basierte Systeme werden typischerweise mit einer von links nach rechts gerichteten Inline-Richtung und einer von oben nach unten gerichteten Blockflussrichtung geschrieben. Lateinische Sprachen umfassen Englisch, Spanisch, Rumänisch und Portugiesisch. Slawische Sprachen umfassen Ukrainisch, Polnisch und Tschechisch.

```html
<p lang="en-US" dir="auto">This is written in English</p>
<p lang="lt-LT" dir="auto">Tai parašyta lietuviu kalba</p>
<p lang="el-GR" dir="auto">Αυτό είναι γραμμένο στα ελληνικά</p>
```

Arabisch-basierte Systeme werden typischerweise mit einer von rechts nach links gerichteten Inline-Richtung und einer von oben nach unten gerichteten Blockflussrichtung geschrieben. Es gibt mehrere horizontal von rechts nach links verlaufende Sprachen, darunter Arabisch, Aramäisch, Aserbaidschanisch, Divehi, Fula, Hebräisch, Kurdisch, N’ko, Persisch, Rohingya, Syrisch und Urdu.

```html
<p lang="ur-PK" dir="auto">یہ اردو میں لکھا ہے۔</p>
<p lang="ku-CRB" dir="auto">ئەمە بە کوردی نووسراوە</p>
```

Han-basierte Systeme werden häufig mit einer von links nach rechts gerichteten Inline-Richtung und einer von oben nach unten gerichteten Blockflussrichtung oder einer von oben nach unten gerichteten Inline-Richtung mit einer von rechts nach links gerichteten Blockflussrichtung geschrieben. Traditionell werden Chinesisch, Vietnamesisch, Koreanisch und Japanisch vertikal in Spalten geschrieben, die von oben nach unten verlaufen, mit einer von rechts nach links gerichteten Blockrichtung, werden jedoch häufig horizontal online gerendert, von links nach rechts verlaufend.

```html
<p lang="jp-JP" dir="auto">これはベトナム語で書かれています</p>
```

Mongolisch-basierte Systeme werden typischerweise vertikal geschrieben, von oben nach unten, in Spalten, die von links nach rechts fließen; eine von oben nach unten gerichtete Inline-Richtung mit einer von links nach rechts gerichteten Blockflussrichtung. Dies unterscheidet sich von Chinesisch, Japanisch und Koreanisch, deren vertikale Textspalten von rechts nach links gelesen werden. Es leitet sich aus der Tatsache ab, dass die mongolische Schrift vom Altuigurischen abstammt, das von links nach rechts geschrieben wurde.

```html
<p lang="mn-MONG" dir="auto">Үүнийг монгол хэлээр бичжээ</p>
```

Um die Schreibmodi korrekt darzustellen, verwenden wir das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir). Da Browser CSS-Styling abschalten können, wird empfohlen, das `dir` Attribut und das {{htmlelement("bdo")}} Element zu verwenden, um ein korrektes bidirektionales Layout in Abwesenheit eines Stylesheets sicherzustellen, anstelle der CSS-{{cssxref("direction")}} Eigenschaft.

Für vertikale Sprachen verwenden wir die {{cssxref("writing-mode")}} und {{cssxref("text-orientation")}} Eigenschaften:

```css
[lang|="jp"] {
  writing-mode: vertical-rl;
  text-orientation: sideways;
}
[lang|="mn"] {
  writing-mode: vertical-lr;
  text-orientation: sideways;
}
```

{{EmbedLiveSample("Writing system modes", "100%", "500")}}

```css hidden
[lang|="jp"],
[lang|="mn"] {
  float: left;
}
```

## Mischung von Schreibmodi

Obwohl diese unterschiedlichen Sprachen unterschiedliche Schreibmodi haben, können Websites, die überwiegend einen Schreibmodus verwenden, Inhalte aus einer anderen Sprache oder einem anderen Schreibmodus enthalten. Zum Beispiel können Artikel in einer arabischen, von rechts nach links verlaufenden Sprach-Website lateinische Zahlen enthalten, die von links nach rechts geschrieben werden. Viele Magazine und Zeitungen mischen verschiedene Schreibmodi auf derselben Seite. Dieser Leitfaden, der verschiedene Schreibmodi demonstriert, tut dies ebenfalls.

Der typografische Modus bestimmt, ob typografische Konventionen, die spezifisch für den vertikalen Fluss sind, für vertikale Schriften (vertikaler typografischer Modus) oder die typografischen Konventionen der horizontalen Schreibmodi (horizontaler typografischer Modus) verwendet werden. Dieses Konzept unterscheidet die vertikale Typografie von der gedrehten horizontalen Typografie.

Die `text-orientation` Komponente des Schreibmodus kontrolliert die Glyphenausrichtung in vertikalen typografischen Modi und bestimmt, ob eine bestimmte typografische Zeicheneinheit aufrecht oder seitlich gesetzt wird.

## Siehe auch

- [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) Modul
