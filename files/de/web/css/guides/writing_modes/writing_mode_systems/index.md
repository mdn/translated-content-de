---
title: Einführung in Schriftsystem-Modi
short-title: Introduction
slug: Web/CSS/Guides/Writing_modes/Writing_mode_systems
l10n:
  sourceCommit: c01d60b02d1cac975acb34e19317a4f75d9fc376
---

CSS unterstützt verschiedene Inhaltsrichtungen oder **Schriftsystem-Modi**, einschließlich von rechts-nach-links, von links-nach-rechts und von oben-nach-unten. Der Leitfaden bietet einen kurzen Überblick über Schriftsystem-Modi und deren Ausrichtungen.

## Block und Inline

Bevor man die Richtung verschiedener Schriftsysteme untersucht, ist es wichtig, die Begriffe "Block" und "Inline" zu verstehen. Der Begriff **Inline** bezieht sich darauf, wie Zeichen und Wörter innerhalb einer Zeile fließen. Der Begriff **Block** bezieht sich darauf, wie Zeilen oder Blöcke von Inhalten nebeneinander gestapelt werden. Der Schreibmodus des Dokuments bestimmt die Block- und Inline-Richtungen eines Dokuments. Sie basieren nicht auf physischen Richtungen wie links, rechts, oben und unten.

### Dimensionen und Richtungen

Alles auf einer Webseite ist entweder in der **Inline**- oder **Block**-Dimension angeordnet. Die _Inline-Dimension_ ist die Dimension, entlang der eine Textzeile in dem aktuellen Schreibmodus verläuft, während die _Block-Dimension_ die Dimension ist, in der Blöcke — wie Absätze — hintereinander angezeigt werden. Die Inline-Dimension steht senkrecht zur Block-Dimension.

In einem englischen Dokument, bei dem der Text horizontal von links-nach-rechts verläuft, oder in einem arabischen Dokument mit dem Text horizontal von rechts-nach-links, ist die Inline-Dimension horizontal, während die _Inline-Richtung_ jeweils links-nach-rechts und rechts-nach-links ist. In beiden Fällen ist die Block-Dimension vertikal, mit der _Block-Richtung_ von oben-nach-unten. In einem vertikalen Schriftsystem-Modus wie Japanisch ist die Inline-Dimension vertikal, da Linien in diesem Schriftsystem vertikal verlaufen, während die Block-Dimension horizontal ist.

### Inline- und Blockboxen

Der _äußere Anzeige_-Typ von Boxen in einem [normalen Fließlayout](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model#normal_flow) bestimmt, wie sich die Box neben anderen Elementen auf der Seite verhält. _Inline-Boxen_ umschließen jede Textzeile und sind entlang der Inline-Dimension angeordnet.

_Blockboxen_ repräsentieren Container auf der Seite, die andere Block- und Inline-Elemente enthalten können. Sie sind entlang der Block-Dimension angeordnet und erstrecken sich in der Inline-Dimension, um den gesamten in ihrem Container verfügbaren Raum auszufüllen (vorausgesetzt, es ist keine spezifische Größe in der Inline-Dimension mit einer Eigenschaft wie {{cssxref("inline-size")}} festgelegt). Blockboxen werden nur von oben nach unten angezeigt, wenn Sie einen Schreibmodus verwenden, der den Text horizontal anzeigt, wie z.B. Englisch.

Das [Modul der logischen CSS-Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties) definiert {{Glossary("flow_relative_values", "fluss-relative Zuordnungen")}} für viele der {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte in CSS, was hilfreich beim Verständnis der [Grundkonzepte der logischen Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts) ist.

### Inline-Grundrichtung und Blockflussrichtung

Die _Inline-Grundrichtung_ ist die primäre Richtung, in der Inhalte in einer Zeile angeordnet sind, und definiert den "Anfang" und das "Ende" einer Zeile. Die {{cssxref("direction")}}-Eigenschaft spezifiziert die Inline-Grundrichtung einer Box und bestimmt zusammen mit der {{cssxref("unicode-bidi")}}-Eigenschaft und der inhärenten Richtungstendenz eines Textinhalts die Reihenfolge des Inline-Levels innerhalb einer Zeile.

Die _Blockflussrichtung_ ist die Richtung, in der Blockebene- und Zeilenboxen innerhalb eines Blockcontainers gestapelt sind. Die {{cssxref("writing-mode")}}-Eigenschaft bestimmt die Blockflussrichtung.

## Schriftsystem-Modi

Verschiedene Schriftsysteme haben unterschiedliche Schreibmodi. Ein horizontaler Schreibmodus ist einer mit horizontalen Textzeilen, d.h. ein abwärts- oder aufwärtsgerichteter Blockfluss. Ein vertikaler Schreibmodus ist einer mit vertikalen Textzeilen, d.h. ein nach links oder rechts gerichteter Blockfluss.

Auf Latein- und Slawisch-basierte Systeme wird typischerweise ein Inline-Richtung von links-nach-rechts mit einem Blockfluss von oben-nach-unten verwendet. Lateinbasierte Sprachen umfassen Englisch, Spanisch, Rumänisch und Portugiesisch. Slawisch-basierte Sprachen umfassen Ukrainisch, Polnisch und Tschechisch.

```html
<p lang="en-US" dir="auto">This is written in English</p>
<p lang="lt-LT" dir="auto">Tai parašyta lietuviu kalba</p>
<p lang="el-GR" dir="auto">Αυτό είναι γραμμένο στα ελληνικά</p>
```

Arabisch-basierte Systeme werden typischerweise mit einer Inline-Richtung von rechts-nach-links und einem Blockfluss von oben-nach-unten geschrieben. Es gibt mehrere horizontale rechts-nach-links Sprachen, einschließlich Arabisch, Aramäisch, Aseri, Divehi, Fula, Hebräisch, Kurdisch, N'ko, Persisch, Rohingya, Syrisch und Urdu.

```html
<p lang="ur-PK" dir="auto">یہ اردو میں لکھا ہے۔</p>
<p lang="ku-CRB" dir="auto">ئەمە بە کوردی نووسراوە</p>
```

Han-basierte Systeme werden üblicherweise mit einer Inline-Richtung von links-nach-rechts und einem Blockfluss von oben-nach-unten oder einer Inline-Richtung von oben-nach-unten mit einem Blockfluss von rechts-nach-links geschrieben. Traditionell werden Chinesisch, Vietnamesisch, Koreanisch und Japanisch vertikal in Spalten von oben nach unten geschrieben, mit einer Blockrichtung von rechts-nach-links, werden jedoch oft horizontal online von links-nach-rechts dargestellt.

```html
<p lang="ja-JP" dir="auto">これは日本語で書かれています</p>
```

Mongolisch-basierte Systeme werden typischerweise vertikal geschrieben, von oben nach unten, in Spalten, die von links nach rechts fließen; eine Inline-Richtung von oben-nach-unten mit einem Blockfluss von links-nach-rechts. Dies unterscheidet sich von Chinesisch, Japanisch und Koreanisch, deren vertikale Textspalten von rechts nach links gelesen werden. Dies ist darauf zurückzuführen, dass das Mongolische Alphabet vom Alt-Uigurischen abstammt, das von links nach rechts geschrieben wurde.

```html
<p lang="mn-Mong" dir="auto">ᠡᠭᠦᠨ ᠢ ᠮᠣᠩᠭᠤᠯ ᠬᠡᠯᠡ ᠪᠠᠷ ᠪᠢᠴᠢᠵᠡᠢ</p>
```

Um die Schreibmodi korrekt darzustellen, verwenden wir das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir). Da Browser CSS-Styling ausschalten können, wird empfohlen, das `dir`-Attribut und das {{htmlelement("bdo")}}-Element zu verwenden, um eine korrekte bidirektionale Anordnung in Ermangelung eines Stylesheets sicherzustellen, anstatt der CSS-{{cssxref("direction")}}-Eigenschaft.

Für vertikale Sprachen verwenden wir die {{cssxref("writing-mode")}}- und {{cssxref("text-orientation")}}-Eigenschaften:

```css
:lang(ja) {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
:lang(mn-Mong) {
  writing-mode: vertical-lr;
  text-orientation: mixed;
}
```

{{EmbedLiveSample("Schriftsystem-Modi", "100%", "500")}}

```css hidden
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Mongolian&display=swap");

:lang(ja),
:lang(mn-Mong) {
  float: left;
}

:lang(mn-Mong) {
  font-family: "Noto Sans Mongolian", sans-serif;
}
```

## Mischung von Schreibmodi

Während diese verschiedenen Sprachen unterschiedliche Schreibmodi haben, können Websites, die hauptsächlich einen Schreibmodus verwenden, Inhalte aus einer anderen Sprache oder einem anderen Schreibmodus enthalten. Zum Beispiel können Artikel auf einer arabischen, rechts-nach-links orientierten Nachrichtenwebsite lateinische Zahlen enthalten, die von links nach rechts geschrieben werden. Viele Zeitschriften und Zeitungen mischen verschiedene Schreibmodi auf derselben Seite. Auch dieser Leitfaden, der verschiedene Schreibmodi demonstriert, macht dies.

Der typografische Modus bestimmt, ob typografische Konventionen verwendet werden, die spezifisch für vertikalen Fluss (vertikaler typografischer Modus) oder für die typografischen Konventionen horizontaler Schreibmodi (horizontaler typografischer Modus) sind. Dieses Konzept unterscheidet vertikales Setzen von gedrehtem horizontalem Setzen.

Die `text-orientation`-Komponente des Schreibmodi steuert die Glyphenausrichtung in vertikalen typografischen Modi und bestimmt, ob eine bestimmte typografische Zeicheneinheit aufrecht oder seitlich gesetzt wird.

## Siehe auch

- [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) Modul
