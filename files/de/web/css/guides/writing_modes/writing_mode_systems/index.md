---
title: Einführung in Schriftsystem-Modi
short-title: Introduction
slug: Web/CSS/Guides/Writing_modes/Writing_mode_systems
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

CSS unterstützt verschiedene inhaltliche Richtungen oder **Schriftsystem-Modi**, einschließlich von rechts nach links, von links nach rechts und von oben nach unten. Der Leitfaden bietet einen kurzen Überblick über Schriftsystem-Modi und deren Ausrichtungen.

## Block und Inline

Bevor man die Richtung von verschiedenen Schriftsystemen betrachtet, ist es wichtig, die Begriffe "Block" und "Inline" zu verstehen. Der Begriff **Inline** bezieht sich darauf, wie Zeichen und Wörter innerhalb einer Zeile fließen. Der Begriff **Block** bezieht sich darauf, wie Zeilen oder Inhaltsblöcke nebeneinander gestapelt werden. Der Schriftsystem-Modus eines Dokuments bestimmt die Block- und Inline-Richtungen eines Dokuments. Sie basieren nicht auf physischen Richtungen wie links, rechts, oben und unten.

### Dimensionen und Richtungen

Alles auf einer Webseite wird entweder in der **Inline**- oder **Block**-Dimension angeordnet. Die _Inline-Dimension_ ist die Dimension, entlang der eine Textzeile im aktuellen Schriftsystem-Modus verläuft, während die _Block-Dimension_ die Dimension ist, in der Blöcke – wie Absätze – nacheinander angezeigt werden. Die Inline-Dimension steht senkrecht zur Block-Dimension.

In einem englischen Dokument, durch das der Text horizontal von links nach rechts verläuft, oder einem arabischen Dokument, durch das der Text horizontal von rechts nach links verläuft, ist die Inline-Dimension horizontal, während die _Inline-Richtung_ links-nach-rechts bzw. rechts-nach-links ist. In beiden Fällen ist die Block-Dimension vertikal, mit der _Block-Richtung_ von oben nach unten. In einem vertikalen Schriftsystem-Modus wie dem Japanischen ist die Inline-Dimension vertikal, da Zeilen in diesem Schreibmodus vertikal verlaufen, während die Block-Dimension horizontal ist.

### Inline- und Block-Boxen

Der _äußere Anzeigetyp_ von Boxen in einem [normal fließenden Layout](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model#normal_flow) bestimmt, wie die Box sich neben anderen Elementen auf der Seite verhält. _Inline-Boxen_ umwinden jede Textzeile und werden entlang der Inline-Dimension angeordnet.

_Block-Boxen_ repräsentieren Container auf der Seite, die andere Block- und Inline-Elemente enthalten können. Sie werden entlang der Block-Dimension angeordnet und erstrecken sich in der Inline-Dimension, um den gesamten verfügbaren Platz in ihrem Container zu füllen (sofern nicht eine spezifische Größe in der Inline-Dimension unter Verwendung einer Eigenschaft wie {{cssxref("inline-size")}} festgelegt wurde). Block-Boxen werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schriftsystem-Modus verwenden, der Text horizontal anzeigt, wie zum Beispiel Englisch.

Das [Modul für CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties) definiert {{Glossary("flow_relative_values", "fluss-relative Zuordnungen")}} für viele der {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte in CSS, was hilfreich ist, um die [grundlegenden Konzepte von logischen Eigenschaften und Werten](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts) zu verstehen.

### Richtungen der Inline-Basis- und Block-Flüsse

Die _Inline-Basis-Richtung_ ist die Hauptausrichtung, in der Inhalte in einer Zeile geordnet sind, und definiert den "Anfang" und das "Ende" einer Zeile. Die {{cssxref("direction")}}-Eigenschaft spezifiziert die Inline-Basis-Richtung einer Box und bestimmt zusammen mit der {{cssxref("unicode-bidi")}}-Eigenschaft und der inhärenten Richtung jeglicher Textinhalte die Reihenfolge der Inline-Level-Inhalte innerhalb einer Zeile.

Die _Block-Fluss-Richtung_ ist die Richtung, in der Block-Level- und Linien-Boxen in einem Block-Container gestapelt werden. Die {{cssxref("writing-mode")}}-Eigenschaft bestimmt die Block-Fluss-Richtung.

## Schriftsystem-Modi

Verschiedene Schriftsysteme haben unterschiedliche Schriftsystem-Modi. Ein horizontaler Schriftsystem-Modus ist einer mit horizontalen Textzeilen, d.h. ein Blockfluss nach unten oder oben. Ein vertikaler Schriftsystem-Modus ist einer mit vertikalen Textzeilen, d.h. ein Blockfluss nach links oder rechts.

Latein- und slawisch-basierte Systeme werden typischerweise mit einer Inline-Richtung von links nach rechts und einer Blockflussrichtung von oben nach unten geschrieben. Zu den lateinisch-basierten Sprachen gehören Englisch, Spanisch, Rumänisch und Portugiesisch. Slawisch-basierte Sprachen umfassen Ukrainisch, Polnisch und Tschechisch.

```html
<p lang="en-US" dir="auto">This is written in English</p>
<p lang="lt-LT" dir="auto">Tai parašyta lietuviu kalba</p>
<p lang="el-GR" dir="auto">Αυτό είναι γραμμένο στα ελληνικά</p>
```

Arabisch-basierte Systeme werden typischerweise mit einer von rechts nach links verlaufenden Inline-Richtung und einer Blockflussrichtung von oben nach unten geschrieben. Es gibt mehrere horizontale von rechts nach links Sprachen, einschließlich Arabisch, Aramäisch, Aserbaidschanisch, Divehi, Fulani, Hebräisch, Kurdisch, N'ko, Persisch, Rohingya, Syrisch und Urdu.

```html
<p lang="ur-PK" dir="auto">یہ اردو میں لکھا ہے۔</p>
<p lang="ku-CRB" dir="auto">ئەمە بە کوردی نووسراوە</p>
```

Han-basierte Systeme werden häufig mit einer von links nach rechts verlaufenden Inline-Richtung und einer Blockflussrichtung von oben nach unten geschrieben, oder mit einer Inline-Richtung von oben nach unten und einer von rechts nach links verlaufenden Blockflussrichtung. Traditionell werden Chinesisch, Vietnamesisch, Koreanisch und Japanisch vertikal in Spalten geschrieben, die von oben nach unten verlaufen, mit einer von rechts nach links verlaufenden Blockrichtung, aber sie werden oft horizontal online dargestellt, die von links nach rechts verlaufen.

```html
<p lang="ja-JP" dir="auto">これは日本語で書かれています</p>
```

Mongolisch-basierte Systeme werden typischerweise vertikal von oben nach unten in Spalten geschrieben, die von links nach rechts verlaufen; eine Inline-Richtung von oben nach unten mit einer von links nach rechts verlaufenden Blockflussrichtung. Dies unterscheidet sich von Chinesisch, Japanisch und Koreanisch, deren vertikale Textspalten von rechts nach links gelesen werden. Es leitet sich von der Tatsache ab, dass die mongolische Schrift aus dem Altuigurischen abgeleitet wurde, das von links nach rechts geschrieben wurde.

```html
<p lang="mn-Mong" dir="auto">ᠡᠭᠦᠨ ᠢ ᠮᠣᠩᠭᠤᠯ ᠬᠡᠯᠡ ᠪᠠᠷ ᠪᠢᠴᠢᠵᠡᠢ</p>
```

Um die Schriftsystem-Modi korrekt darzustellen, verwenden wir das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir). Weil Browser CSS-Stilierung ausschalten können, wird empfohlen, das `dir`-Attribut und das {{htmlelement("bdo")}}-Element zu verwenden, um ein korrektes bidirektionales Layout in Abwesenheit eines Stylesheets zu gewährleisten, anstatt die CSS-{{cssxref("direction")}}-Eigenschaft.

Für vertikale Sprachen verwenden wir die Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("text-orientation")}}:

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

{{EmbedLiveSample("Writing system modes", "100%", "500")}}

```css hidden
@import "https://fonts.googleapis.com/css2?family=Noto+Sans+Mongolian&display=swap";

:lang(ja),
:lang(mn-Mong) {
  float: left;
}

:lang(mn-Mong) {
  font-family: "Noto Sans Mongolian", sans-serif;
}
```

## Schreibmodi mischen

Während diese verschiedenen Sprachen unterschiedliche Schreibmodi haben, können Websites, die hauptsächlich einen Typ von Schreibmodus verwenden, Inhalte aus einer anderen Sprache oder einem anderen Schreibmodus enthalten. Zum Beispiel können Artikel auf einer arabischen, von rechts nach links laufenden Sprachnachrichtenseite lateinische Zahlen enthalten, die von links nach rechts geschrieben werden. Viele Magazine und Zeitungen mischen auf derselben Seite verschiedene Schreibmodi. Auch dieser Leitfaden, der verschiedene Schreibmodi demonstriert, tut dies.

Der typografische Modus bestimmt, ob typografische Konventionen spezifisch für vertikale Flüsse für vertikale Schriftzeichen (vertikaler typografischer Modus) verwendet werden oder ob die typografischen Konventionen horizontaler Schreibmodi (horizontaler typografischer Modus) verwendet werden. Dieses Konzept unterscheidet das vertikale Setzen von Schriftzeichen aus dem rotieren horizontalen Setzen von Schriftzeichen.

Die `text-orientation`-Komponente des Schreibmodus steuert die Glyphen-Ausrichtung in vertikalen typografischen Modi und legt fest, ob eine bestimmte typografische Zeicheneinheit aufrecht oder seitlich gesetzt wird.

## Siehe auch

- [CSS-Schriftsystem-Modi](/de/docs/Web/CSS/Guides/Writing_modes)-Modul
