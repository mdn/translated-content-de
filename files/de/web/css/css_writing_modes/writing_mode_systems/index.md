---
title: Einführung in Schreibmodus-Systeme
slug: Web/CSS/CSS_writing_modes/Writing_mode_systems
l10n:
  sourceCommit: 5f406af7cc71ebbd0ce080c9216b6094f58732cf
---

CSS unterstützt unterschiedliche Schreibrichtungen oder **Schreibmodi**, einschließlich von rechts nach links, von links nach rechts und von oben nach unten. Der Leitfaden bietet einen kurzen Überblick über Schreibmodus-Systeme und deren Richtungen.

## Block und Inline

Bevor die Richtung verschiedener Schriftsysteme betrachtet wird, ist es wichtig, die Begriffe „Block“ und „Inline“ zu verstehen. Der Begriff **Inline** bezieht sich darauf, wie Zeichen und Wörter innerhalb einer Zeile fließen. Der Begriff **Block** bezieht sich darauf, wie Zeilen oder Inhaltsblöcke nebeneinander gestapelt werden. Der Schreibmodus des Dokuments bestimmt die Block- und Inline-Richtungen eines Dokuments. Sie basieren nicht auf physischen Richtungen wie links, rechts, oben und unten.

### Dimensionen und Richtungen

Alles auf einer Webseite wird entweder in der **Inline-** oder der **Block-Dimension** angeordnet. Die _Inline-Dimension_ ist die Dimension, entlang der eine Textzeile im aktuellen Schreibmodus verläuft, während die _Block-Dimension_ die Dimension ist, in der Blöcke — wie Absätze — nacheinander dargestellt werden. Die Inline-Dimension steht senkrecht zur Block-Dimension.

In einem englischen Dokument, bei dem der Text horizontal von links nach rechts verläuft, oder einem arabischen Dokument, bei dem der Text horizontal von rechts nach links verläuft, ist die Inline-Dimension horizontal, während die _Inline-Richtung_ jeweils links-nach-rechts oder rechts-nach-links ist. In beiden Fällen ist die Block-Dimension vertikal, mit der _Block-Richtung_ von oben nach unten. In einem vertikalen Schreibmodus, wie im Japanischen, ist die Inline-Dimension vertikal, da die Zeilen in diesem Schreibmodus vertikal verlaufen, während die Block-Dimension horizontal ist.

### Inline- und Block-Boxen

Der _Außentyp der Darstellung_ von Boxen in einem [normalen Fluss-Layout](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#normal_flow) bestimmt, wie sich die Box neben anderen Elementen auf der Seite verhält. _Inline-Boxen_ umfassen jede Textzeile und werden entlang der Inline-Dimension angeordnet.

_Block-Boxen_ repräsentieren Container auf der Seite, die andere Block- und Inline-Elemente enthalten können. Sie werden entlang der Block-Dimension angeordnet und erstrecken sich in der Inline-Dimension, um den gesamten verfügbaren Raum in ihrem Container zu füllen (vorausgesetzt, es ist keine spezifische Größe in der Inline-Dimension mit einer Eigenschaft wie {{cssxref("inline-size")}} festgelegt). Block-Boxen werden nur von oben nach unten auf der Seite dargestellt, wenn Sie einen Schreibmodus verwenden, der Text horizontal darstellt, wie im Englischen.

Das [CSS-Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties) definiert {{Glossary("flow_relative_values", "fluss-relative Zuordnungen")}} für viele der {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte in CSS, was hilfreich ist, um die [grundlegenden Konzepte der logischen Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values) zu verstehen.

### Basisrichtung von Inline- und Block-Flussrichtungen

Die _Inline-Basisrichtung_ ist die Hauptausrichtung, in der der Inhalt auf einer Zeile angeordnet ist, und definiert den „Anfang“ und das „Ende“ einer Zeile. Die {{cssxref("direction")}}-Eigenschaft legt die Inline-Basisrichtung einer Box fest und bestimmt zusammen mit der {{cssxref("unicode-bidi")}}-Eigenschaft und der inhärenten Richtung aller Textinhalte die Anordnung von Inline-Inhalten innerhalb einer Zeile.

Die _Blockflussrichtung_ ist die Richtung, in der Block- und Zeilen-Boxen in einem Blockcontainer gestapelt werden. Die {{cssxref("writing-mode")}}-Eigenschaft bestimmt die Blockflussrichtung.

## Schriftsystem-Modi

Unterschiedliche Schriftsysteme haben unterschiedliche Schreibmodi. Ein horizontaler Schreibmodus ist einer mit horizontalen Textzeilen, d.h. einem abwärts oder aufwärts gerichteten Blockfluss. Ein vertikaler Schreibmodus ist einer mit vertikalen Textzeilen, d.h. einem nach links oder rechts gerichteten Blockfluss.

Latein- und slawischbasierte Systeme werden typischerweise mit einer links-nach-rechts Inline-Richtung und einer oben-nach-unten Blockflussrichtung geschrieben. Zu den lateinischen Sprachen gehören Englisch, Spanisch, Rumänisch und Portugiesisch. Slawische Sprachen umfassen Ukrainisch, Polnisch und Tschechisch.

```html
<p lang="en-US" dir="auto">This is written in English</p>
<p lang="lt-LT" dir="auto">Tai parašyta lietuviu kalba</p>
<p lang="el-GR" dir="auto">Αυτό είναι γραμμένο στα ελληνικά</p>
```

Arabisch-basierte Systeme werden typischerweise mit einer rechts-nach-links Inline-Richtung und einer oben-nach-unten Blockflussrichtung geschrieben. Es gibt mehrere horizontale Rechts-nach-links-Sprachen, darunter Arabisch, Aramäisch, Aserbaidschanisch, Divehi, Fulani, Hebräisch, Kurdisch, N'Ko, Persisch, Rohingya, Syrisch und Urdu.

```html
<p lang="ur-PK" dir="auto">یہ اردو میں لکھا ہے۔</p>
<p lang="ku-CRB" dir="auto">ئەمە بە کوردی نووسراوە</p>
```

Han-basierte Systeme werden üblicherweise mit einer links-nach-rechts Inline-Richtung und einer oben-nach-unten Blockflussrichtung oder einer oben-nach-unten Inline-Richtung mit einer rechts-nach-links Blockflussrichtung geschrieben. Traditionell werden Chinesisch, Vietnamesisch, Koreanisch und Japanisch vertikal in Spalten geschrieben, die von oben nach unten und dann von rechts nach links gehen, werden jedoch online oft horizontal von links nach rechts dargestellt.

```html
<p lang="jp-JP" dir="auto">これはベトナム語で書かれています</p>
```

Mongolisch-basierte Systeme werden typischerweise vertikal, von oben nach unten in Spalten geschrieben, die von links nach rechts fließen; eine oben-nach-unten Inline-Richtung mit einer links-nach-rechts Blockflussrichtung. Dies unterscheidet sich von Chinesisch, Japanisch und Koreanisch, deren vertikale Textspalten von rechts nach links gelesen werden. Dies leitet sich aus der Tatsache ab, dass die mongolische Schrift aus dem Altuigurischen stammt, das von links nach rechts geschrieben wurde.

```html
<p lang="mn-MONG" dir="auto">Үүнийг монгол хэлээр бичжээ</p>
```

Um die Schreibmodi korrekt darzustellen, verwenden wir das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir). Da Browser CSS-Styling deaktivieren können, wird empfohlen, das `dir`-Attribut und das {{htmlelement("bdo")}}-Element zu verwenden, um die korrekte bidirektionale Anordnung in Abwesenheit eines Style-Sheets zu gewährleisten, anstatt die CSS-{{cssxref("direction")}}-Eigenschaft.

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

## Mischen von Schreibmodi

Obwohl diese verschiedenen Sprachen unterschiedliche Schreibmodi haben, können Websites, die hauptsächlich eine Art von Schreibmodus verwenden, Inhalte aus einer anderen Sprache oder einem anderen Schreibmodus enthalten. Zum Beispiel können Artikel auf einer arabischen, rechts-nach-links Sprach-Nachrichtenseite lateinische Zahlen enthalten, die von links nach rechts geschrieben werden. Viele Zeitschriften und Zeitungen mischen verschiedene Schreibmodi auf derselben Seite. Dieser Leitfaden, der verschiedene Schreibmodi demonstriert, tut dies ebenfalls.

Der typografische Modus bestimmt, ob typografische Konventionen verwendet werden, die spezifisch für den vertikalen Fluss vertikaler Schriften sind (vertikaler typografischer Modus) oder ob die typografischen Konventionen horizontaler Schreibmodi verwendet werden (horizontaler typografischer Modus). Dieses Konzept unterscheidet die vertikale Typografie von der gedrehten horizontalen Typografie.

Die `text-orientation`-Komponente des Schreibmodus steuert die Glyphenausrichtung in vertikalen typografischen Modi und bestimmt, ob eine bestimmte typografische Einheit aufrecht oder seitwärts gesetzt wird.

## Siehe auch

- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
