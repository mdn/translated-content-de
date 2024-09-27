---
title: Leitfaden für Variable Fonts
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

**Variable Fonts** sind eine Weiterentwicklung der OpenType-Schriftartspezifikation, die es ermöglicht, viele verschiedene Variationen eines Schriftschnitts in einer einzigen Datei zu integrieren, anstatt für jede Breite, Stärke oder Stil eine separate Schriftdatei zu haben. Sie erlauben es Ihnen, alle in einer bestimmten Schriftdatei enthaltenen Variationen über CSS und eine einzige {{cssxref("@font-face")}}-Referenz zu nutzen. Dieser Artikel gibt Ihnen alles, was Sie wissen müssen, um mit der Verwendung von Variable Fonts zu beginnen.

> [!NOTE]
> Um Variable Fonts auf Ihrem Betriebssystem zu verwenden, müssen Sie sicherstellen, dass dieses auf dem neuesten Stand ist. Zum Beispiel benötigen Linux-Betriebssysteme die neueste Linux Freetype-Version, und macOS vor High Sierra (10.13) unterstützt keine Variable Fonts. Wenn Ihr Betriebssystem nicht auf dem neuesten Stand ist, können Sie Variable Fonts nicht auf Webseiten oder in den Firefox Developer Tools verwenden.

## Variable Fonts: Was sie sind und wie sie sich unterscheiden

Um besser zu verstehen, was bei Variable Fonts anders ist, lohnt es sich, einen Blick darauf zu werfen, wie nicht-variable Schriftarten sind und wie sie im Vergleich abschneiden.

### Standard- (oder Statische) Schriftarten

In der Vergangenheit wurde ein Schriftschnitt als mehrere einzelne Schriftarten produziert, wobei jede Schriftart eine spezifische Breite/Stärke/Stil-Kombination darstellte. So hätten Sie separate Dateien für 'Roboto Regular', 'Roboto Bold' und 'Roboto Bold Italic' — was bedeutet, dass Sie mit 20 oder 30 verschiedenen Schriftdateien enden könnten, um einen vollständigen Schriftschnitt darzustellen (es könnten mehrere Male so viele sein für einen großen Schriftschnitt, der unterschiedliche Breiten hat).

In einem solchen Szenario müssten Sie, um einen Schriftschnitt für den typischen Gebrauch auf einer Seite für Fließtext zu verwenden, mindestens vier Dateien haben: regular, italic, bold und bold italic. Wenn Sie mehr Stärken hinzufügen möchten, wie zum Beispiel eine leichtere für Bildunterschriften oder eine schwerere für zusätzlichen Nachdruck, würde das mehrere weitere Dateien bedeuten. Dies führt zu mehr HTTP-Anfragen und mehr heruntergeladenen Daten (normalerweise etwa 20k oder mehr pro Datei).

### Variable Fonts

Mit einem Variable Font können all diese Permutationen in einer einzigen Datei enthalten sein. Diese Datei wäre größer als eine einzelne Schriftart, aber in den meisten Fällen kleiner oder ungefähr die gleiche Größe wie die vier, die Sie für Fließtext laden könnten. Der Vorteil bei der Wahl des Variable Fonts liegt darin, dass Sie Zugriff auf die gesamte Palette von Stärken, Breiten und Stilen haben, die verfügbar sind, anstatt auf nur die wenigen beschränkt zu sein, die Sie bisher separat geladen hätten.

Dies ermöglicht gängige typografische Techniken wie das Verwenden verschiedener Schriftgrößen mit unterschiedlichen Stärken für bessere Lesbarkeit bei jeder Größe oder das Verwenden einer etwas schmaleren Breite für datenintensive Anzeigen. Zum Vergleich: In einem typografischen System einer Zeitschrift ist es üblich, 10–15 oder mehr verschiedene Gewicht- und Breitenkombinationen im gesamten Werk zu verwenden — was eine viel breitere Palette von Stilen bietet, als derzeit im Web üblich ist (oder tatsächlich allein aus Leistungsgründen praktisch).

#### Eine Anmerkung zu Schriftfamilien, Stärken und Varianten

Vielleicht fällt Ihnen auf, dass wir darüber gesprochen haben, für jede Stärke und jeden Stil (d.h. fett und kursiv und fett kursiv) eine spezifische Schriftdatei zu haben, anstatt sich darauf zu verlassen, dass der Browser diese synthetisiert. Der Grund dafür ist, dass die meisten Schriftschnitte sehr spezifische Designs für fettere Stärken und Kursive haben, die oft völlig unterschiedliche Zeichen enthalten (zum Beispiel unterscheiden sich der Kleinbuchstabe 'a' und 'g' in der Kursivschrift oft stark). Um das Schriftartdesign am genauesten widerzuspiegeln und Unterschiede zwischen Browsern zu vermeiden, wie sie die verschiedenen Stile synthetisieren (oder auch nicht), ist es genauer, die spezifischen Schriftdateien dort zu laden, wo sie benötigt werden, wenn Sie eine nicht-variable Schrift verwenden.

Sie werden vielleicht auch feststellen, dass einige Variable Fonts in zwei Dateien aufgeteilt sind: eine für aufrechte und all ihre Variationen und eine mit den kursiven Variationen. Dies wird manchmal gemacht, um die Gesamtdateigröße zu reduzieren, in Fällen, in denen die Kursive nicht benötigt oder verwendet wird. In allen Fällen ist es dennoch möglich, sie mit einem gemeinsamen {{cssxref("font-family")}}-Namen zu verknüpfen, sodass Sie sie mit dem gleichen `font-family` und dem entsprechenden {{cssxref("font-style")}} aufrufen können.

## Einführung der 'Variationsachse'

Der Kern des neuen Variable Fonts-Formats ist das Konzept einer **Variationsachse**, die den zulässigen Bereich dieses speziellen Aspekts des Schriftartdesigns beschreibt. Die 'Gewichtsachse' beschreibt also, wie leicht oder wie fett die Buchstabenformen sein können; die 'Breitenachse' beschreibt, wie schmal oder wie breit sie sein können; die 'Kursivachse' beschreibt, ob kursivierte Buchstabenformen vorhanden sind und ein- oder ausgeschaltet werden können, usw. Beachten Sie, dass eine Achse ein Bereich oder eine binäre Wahl sein kann. Das Gewicht könnte von 1–999 reichen, während kursiv 0 oder 1 sein könnte (aus oder an).

Wie in der Spezifikation definiert, gibt es zwei Arten von Achsen: **registrierte** und **benutzerdefinierte**:

- Registrierte Achsen sind solche, die am häufigsten angetroffen werden und häufig genug sind, dass es den Autoren der Spezifikation wert war, sie zu standardisieren. Die fünf aktuell registrierten Achsen sind Gewicht, Breite, Neigung, Kursiv und optische Größe. Das W3C hat sich verpflichtet, sie existierenden CSS-Attributen zuzuordnen und in einem Fall ein neues einzuführen, das Sie unten sehen werden.
- Benutzerdefinierte Achsen sind unbegrenzt: Der Schriftschnittdesigner kann jede Achse definieren und umfassen, die er möchte, und muss ihr lediglich ein vierstelliges **Tag** geben, um sie innerhalb des Schriftdateiformats selbst zu identifizieren. Diese vierbuchstabigen Tags können in CSS verwendet werden, um einen Punkt entlang dieser Variationsachse anzugeben, wie in den untenstehenden Codebeispielen gezeigt wird.

### Registrierte Achsen und bestehende CSS-Attribute

In diesem Abschnitt demonstrieren wir die fünf registrierten Achsen mit Beispielen und dem entsprechenden CSS. Wo möglich, sind sowohl die Standard- als auch die niedrigeren Syntax enthalten. Die niedrigere Syntax ({{cssxref("font-variation-settings")}}) war der erste Mechanismus, der implementiert wurde, um die frühen Implementierungen der Unterstützung für Variable Fonts zu testen, und ist notwendig, um neue oder benutzerdefinierte Achsen über die fünf registrierten hinaus zu nutzen. Allerdings war es die Absicht des W3C, dass diese Syntax nicht verwendet wird, wenn andere Attribute verfügbar sind. Daher sollte, wo immer möglich, das entsprechende Attribut verwendet werden, wobei die niedrige Syntax von `font-variation-settings` nur verwendet wird, um Werte oder Achsen einzustellen, die anderweitig nicht verfügbar sind.

#### Hinweise

1. Bei der Verwendung von `font-variation-settings` ist es wichtig zu beachten, dass Achsennamen case-sensitiv sind. Die registrierten Achsennamen müssen in Kleinbuchstaben und benutzerdefinierte Achsen in Großbuchstaben geschrieben werden. Zum Beispiel:

   `wght` (Gewicht) ist eine registrierte Achse und `GRAD` (Grad) ist eine benutzerdefinierte.

2. Wenn Sie Werte mit `font-variation-settings` festgelegt haben und einen dieser Werte ändern möchten, müssen Sie alle neu deklarieren (genauso wie wenn Sie OpenType-Schriftartfeatures mit {{cssxref("font-feature-settings")}} einstellen). Sie können diesen Einschränkungen entgehen, indem Sie [CSS-Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties) (CSS-Variablen) für die einzelnen Werte verwenden und den Wert einer individuellen benutzerdefinierten Eigenschaft ändern. Beispielcode folgt am Ende des Leitfadens.

### Gewicht

Gewicht (dargestellt durch das `wght`-Tag) definiert die Designachse, wie dünn oder dick (leicht oder schwer, in typografischen Begriffen üblich) die Striche der Buchstabenformen sein können. Seit langem gibt es in CSS die Möglichkeit, dies über die {{cssxref("font-weight")}}-Eigenschaft anzugeben, die numerische Werte von 100 bis 900 in 100er-Schritten und Schlüsselwörter wie `normal` oder `bold` akzeptiert, die Aliasse für ihre entsprechenden numerischen Werte sind (400 bzw. 700 in diesem Fall). Diese werden weiterhin angewendet, wenn man mit nicht-variablen oder variablen Schriften umgeht, aber bei variablen Schriften ist nun jeder Wert von 1 bis 1000 gültig.

Es sollte beachtet werden, dass es derzeit keine Möglichkeit in der `@font-face`-Deklaration gibt, einen spezifischen Punkt auf der Variationsachse einer variablen Schrift dem Schlüsselwort `bold` (oder einem anderen Schlüsselwort) zuzuordnen. Dies kann im Allgemeinen recht einfach gelöst werden, erfordert jedoch einen zusätzlichen Schritt beim Schreiben Ihres CSS:

Der folgende CSS-Code im Live-Beispiel kann bearbeitet werden, damit Sie mit `font-weight`-Werten experimentieren können.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}

### Breite

Breite (dargestellt durch das `wdth`-Tag) definiert die Designachse, wie schmal oder breit (kondensiert oder erweitert, in typografischen Begriffen) die Buchstabenformen sein können. Dies wird typischerweise in CSS mithilfe der {{cssxref("font-stretch")}}-Eigenschaft festgelegt, mit Werten die als Prozentsatz über oder unter 'normal' (100%) ausgedrückt werden, wobei jede Zahl größer als 0 technisch gültig ist—obwohl es viel wahrscheinlicher ist, dass der Bereich näher an der 100%-Marke liegt, wie 75%-125%. Wenn ein Zahlenwert außerhalb des im Font codierten Bereichs angegeben wird, sollte der Browser den Font am nächsten zulässigen Wert rendern.

> [!NOTE]
> Das % Symbol wird nicht verwendet, wenn `font-variation-settings` genutzt wird.

Der folgende CSS-Code im Live-Beispiel kann bearbeitet werden, damit Sie mit `font width`-Werten experimentieren können.

{{EmbedGHLiveSample("css-examples/variable-fonts/width.html", '100%', 520)}}

### Kursiv

Die Kursiv- (`ital`) Achse kann im Bereich `[0-1]` gesetzt werden, wobei `0` "nicht kursiv", `0.5` "halb kursiv" und `1` "voll kursiv" spezifiziert. Kursivdesigns umfassen oft dramatisch unterschiedliche Buchstabenformen im Vergleich zu ihren aufrechten Gegenstücken, sodass im Übergang von aufrecht zu kursiv oft mehrere Glyphen- (oder Zeichen-) Ersetzungen erfolgen. Kursiv und kursiviert werden oft etwas austauschbar verwendet, sind jedoch in Wahrheit ziemlich verschieden. Kursiviert wird in diesem Kontext mit dem Begriff `slant` (siehe den untenstehenden Abschnitt) definiert und ein Schriftschnitt würde typischerweise eines von beiden, aber nicht beide haben.

In CSS werden sowohl kursiv als auch kursiviert auf Text mithilfe der {{cssxref("font-style")}}-Eigenschaft angewendet. Beachten Sie auch die Einführung von `font-synthesis: none;` — das verhindert, dass Browser versehentlich die Variationsachse und eine synthetisierte Kursivschrift anwenden. Dies kann auch verwendet werden, um Faux-Bold zu verhindern.

Der folgende CSS-Code im Live-Beispiel kann bearbeitet werden, damit Sie mit `font italics` experimentieren können.

{{EmbedGHLiveSample("css-examples/variable-fonts/italic.html", '100%', 520)}}

### Neigung

Neigung (dargestellt durch das `slnt`-Tag), oder wie es oft bezeichnet wird, 'oblique' — unterscheidet sich von echten Kursiven darin, dass es den Winkel der Buchstabenformen ändert, aber keine Zeichenersetzung vornimmt. Es ist auch variabel, da es als numerischer Bereich ausgedrückt wird. Dies ermöglicht es, den Font überall entlang der Neigungsachse zu variieren. Der zulässige Bereich reicht von -90 bis 90 Grad.

Die beiden Eigenschaften, die die Neigung steuern können, sind [`font-style`](/de/docs/Web/CSS/font-style) und [`font-variation-settings`](/de/docs/Web/CSS/font-variation-settings). Die folgenden zwei Eigenschaftsdeklarationen sind identisch:

Bevorzugen Sie die `font-style` Eigenschaft über die `font-variation-settings` Eigenschaft. Das `deg` Schlüsselwort wird nicht verwendet, wenn die `font-variation-settings` Eigenschaft verwendet wird. Außerdem bedeutet bei der `font-variation-settings` Eigenschaft ein positiver Winkel eine gegen den Uhrzeigersinn laufende Neigung.

Im folgenden Live-Beispiel können Sie die Neigung anpassen.

{{EmbedLiveSample("slant", "100%", "350")}}

### Optische Größe

Dies ist etwas Neues für digitale Schriftarten und CSS, jedoch eine jahrhundertealte Technik im Design und in der Herstellung von Metallschriften. Optische Größenbeiträge beziehen sich auf die Praxis, die Dicke der Strichstärken von Buchstabenformen basierend auf der physischen Größe zu variieren. Wenn die Größe sehr klein war (wie zum Beispiel etwa 10 oder 12 px), hätten die Zeichen insgesamt einen dickeren Strich und möglicherweise andere kleine Modifikationen, um sicherzustellen, dass sie reproduziert und bei einer physisch kleineren Größe lesbar wären. Umgekehrt, wenn eine viel größere Größe verwendet wurde (wie 48 oder 60 px), könnten viel größere Unterschiede in den dicken und dünnen Strichstärken auftreten, die das Schriftschnittdesign mehr im Einklang mit der ursprünglichen Absicht zeigen.

Während dies ursprünglich zur Kompensation des Tinten- und Papierdruckverfahrens (sehr dünne Linien in kleinen Größen wurden oft nicht gedruckt, was den Buchstabenformen ein zerbrochenes Erscheinungsbild verlieh) durchgeführt wurde, lässt es sich gut auf digitale Displays übertragen, wenn man die Bildschirmqualität und die physische Größe des Renderings kompensiert.

Werte für die optische Größe sind allgemein dafür gedacht, automatisch entsprechend der `font-size` angewendet zu werden, können aber auch mithilfe der niedrigen Syntax `font-variation-settings` manipuliert werden.

Es gibt ein neues Attribut, {{cssxref("font-optical-sizing")}}, das eingeführt wurde, um Variable Fonts in CSS zu unterstützen. Wenn `font-optical-sizing` verwendet wird, sind die einzigen erlaubten Werte `auto` oder `none` — dieses Attribut ermöglicht lediglich das Ein- oder Ausschalten der optischen Größenanpassung. Wenn jedoch `font-variation-settings: 'opsz' <num>` verwendet wird, können Sie einen numerischen Wert angeben. In den meisten Fällen möchten Sie die `font-size` (die physische Größe, in der die Schrift gerendert wird) mit dem `opsz`-Wert abstimmen (was die beabsichtigte Anwendung der optischen Größenanpassung bei Verwendung von `auto` darstellt). Die Möglichkeit, einen spezifischen Wert anzugeben, ist gegeben, damit, sollte es notwendig sein, das Standardverhalten — aus Lesbarkeits-, ästhetischen oder anderen Gründen — zu überschreiben, ein spezifischer Wert angewendet werden kann.

Der folgende CSS-Code im Live-Beispiel kann bearbeitet werden, damit Sie mit Werten für die optische Größe experimentieren können.

{{EmbedGHLiveSample("css-examples/variable-fonts/optical-sizing.html", '100%', 1020)}}

### Benutzerdefinierte Achsen

Benutzerdefinierte Achsen sind genau das: sie können jede Designvariationsachse sein, die sich der Schriftschnittdesigner vorstellt. Es mag einige geben, die ziemlich häufig werden — oder sogar registriert werden — aber nur die Zeit wird es zeigen.

### Grad

Grad könnte eine der häufigeren benutzerdefinierten Achsen werden, da er eine bekannte Geschichte im Schriftschnittdesign hat. Die Praxis, verschiedene Grade eines Schriftschnitts zu gestalten, wurde oft als Reaktion auf den beabsichtigten Gebrauch und die Drucktechnik durchgeführt. Der Begriff 'Grade' bezieht sich auf das relative Gewicht oder die Dichte des Schriftschnittdesigns, unterscheidet sich jedoch von traditionellem 'Gewicht' darin, dass der physische Raum, den der Text einnimmt, sich nicht ändert, sodass die Ändern des Textgrades nicht das gesamte Layout des Textes oder der umgebenden Elemente ändert. Dies macht Grade zu einer nützlichen Variationsachse, da sie variiert oder animiert werden kann, ohne dass es zu einem Umbruch des Textes selbst kommt.

Der folgende CSS-Code im Live-Beispiel kann bearbeitet werden, damit Sie mit `font grade`-Werten experimentieren können.

{{EmbedGHLiveSample("css-examples/variable-fonts/grade.html", '100%', 520)}}

### Verwenden einer variablen Schriftart: Änderungen bei @font-face

Die Syntax zum Laden von variablen Schriftarten ist sehr ähnlich der jeder anderen Webschrift, mit einigen bemerkenswerten Unterschieden, die über Upgrades zur traditionellen {{cssxref("@font-face")}}-Syntax bereitgestellt werden, die in modernen Browsern verfügbar ist.

Die grundlegende Syntax bleibt gleich, aber die Schrifttechnologie kann spezifiziert werden, und zulässige Bereiche für Deskriptoren wie `font-weight` und `font-stretch` können angegeben werden, anstatt sie nach dem geladenen Schriftdateinamen zu benennen.

#### Beispiel für eine Standard-aufrichte (Römische) Schrift

In diesem Fall zeigt der `normal`-Wert an, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft `normal` lautet. Die Werte `oblique 0deg` und `oblique 0deg 20deg` zeigen aufgrund von `0deg` auch an, dass der Font normale aufrechte Glyphen hat.

#### Beispiel für eine Schrift, die nur Kursivschrift und keine aufrechten Zeichen enthält

In diesem Fall zeigt der `italic`-Wert an, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft `italic` lautet. Der `oblique 14deg`-Wert zeigt auch an, dass der Font kursivierte Glyphen hat.

#### Beispiel für eine Schriftart, die eine oblique (Neigungs-) Achse enthält

In diesem Fall zeigt der Wert `oblique 0deg 12deg` an, dass diese Schriftdatei verwendet werden sollte, wenn in einer Stilregel die `font-family`-Eigenschaft `MyVariableFontName` ist und die [font-style](/de/docs/Web/CSS/font-style) Eigenschaft oblique mit einem Winkel zwischen null und 12 Grad einschließlich ist.

> [!NOTE]
> Nicht alle Browser haben die vollständige Syntax für das Schriftartformat implementiert, also testen Sie sorgfältig. Alle Browser, die Variable Fonts unterstützen, werden sie trotzdem rendern, wenn Sie das Format nur auf das Dateiformat setzen, anstatt format-variations (d.h. `woff2` anstelle von `woff2-variations`), aber es ist am besten, die richtige Syntax zu verwenden, wenn möglich.

> [!NOTE]
> Das Angeben von Wertebereichen für `font-weight`, `font-stretch` und `font-style` verhindert, dass der Browser versucht, eine Achse außerhalb dieses Bereichs zu rendern, wenn Sie das entsprechende Attribut verwenden (d.h. `font-weight` oder `font-stretch`), aber es wird Sie nicht daran hindern, einen ungültigen Wert über `font-variation-settings` anzugeben, also verwenden Sie es mit Vorsicht.

## Arbeiten mit älteren Browsern

Die Unterstützung für Variable Fonts kann mit CSS-Feature-Queries geprüft werden (siehe {{cssxref("@supports")}}), sodass es möglich ist, Variable Fonts in der Produktion zu verwenden und das CSS, das die Variable Fonts aufruft, in einem Feature-Query-Block zu listen.

## Beispielseiten

Die folgenden Beispielseiten zeigen zwei verschiedene Möglichkeiten, Ihr CSS zu strukturieren. Die erste verwendet die Standardattribute, wo immer möglich. Das zweite Beispiel verwendet CSS Custom Properties, um Werte für eine `font-variation-settings`-Zeichenkette festzulegen und zeigt, wie Sie leichter einzelne Variable-Werte aktualisieren können, indem Sie eine einzelne Variable überschreiben, anstatt die gesamte Zeichenkette umzuschreiben. Beachten Sie den Hover-Effekt auf dem `h2`, der nur den Grade-Achsen-Benutzerdefinierte Eigenschaftswert ändert.

{{EmbedGHLiveSample("css-examples/variable-fonts/sample-page.html", '100%', 1220)}}

## Ressourcen

- [W3C CSS-Schriftarten-Modul 4 Spezifikation](https://drafts.csswg.org/css-fonts-4/) (Entwurfsfassung)
- [W3C GitHub-Issue-Warteschlange](https://github.com/w3c/csswg-drafts/issues)
- [Microsoft Open Type Variationen Einführung](https://learn.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Microsoft OpenType Design-Variationsachsen-Tag-Registry](https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue](https://wakamaifondue.com/) (eine Seite, die Ihnen zeigt, was Ihre Schrift bereitstellen kann, über eine einfache Drag-and-Drop-Inspektionsschnittstelle)
- [Axis Praxis](https://www.axis-praxis.org/) (die ursprüngliche Spielwiese für Variable Fonts)
- [V-Fonts.com](https://v-fonts.com/) (ein Katalog von Variable Fonts und wo man sie bekommen kann)
- [Font Playground](https://play.typedetail.com/) (eine weitere Spielwiese für Variable Fonts mit einigen sehr einmaligen Ansätzen für die Benutzeroberfläche)
