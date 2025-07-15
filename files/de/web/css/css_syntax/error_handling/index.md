---
title: CSS-Fehlerbehandlung
short-title: Error handling
slug: Web/CSS/CSS_syntax/Error_handling
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Wenn in CSS ein Fehler wie ein ungültiger Wert oder ein fehlendes Semikolon vorliegt, wird der Browser (oder ein anderer Benutzeragent) im Gegensatz zum [Auslösen eines Fehlers wie in JavaScript](/de/docs/Web/JavaScript/Reference/Errors) sich problemlos erholen. Browser geben keine CSS-bezogenen Warnungen aus oder zeigen auf andere Weise an, dass Fehler in Stilen aufgetreten sind. Sie verwerfen einfach ungültigen Inhalt und parsen anschließend gültige Stile. Dies ist ein Feature von CSS und kein Fehler.

Dieser Leitfaden beschreibt, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern und verwirft die minimal benötigte Menge an CSS-Code, bevor er das CSS wieder normal {{Glossary("parse", "parsieren")}} kann. Die "Fehlerbehebung" besteht lediglich darin, ungültigen Inhalt zu ignorieren oder zu überspringen.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Features, ohne sich Gedanken über eventuelle Fehler in älteren Browsern machen zu müssen. Ein Browser erkennt möglicherweise ein neues Feature nicht, aber das ist in Ordnung. Das Verwerfen von ungültigem Inhalt ohne das Auslösen eines Fehlers ermöglicht es, dass alte und neue Syntax gleichzeitig im selben Regelset koexistieren, allerdings sollten diese in dieser Reihenfolge angegeben werden. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl eine einzelne ältere Wertsyntax als auch die [Mehrfach-Schlüsselwort-Syntax](/de/docs/Web/CSS/CSS_display/multi-keyword_syntax_of_display). Browser werden die alte Syntax rendern, bis sie die neue Syntax als gültig erkennen, woraufhin die neue Syntax die alte überschreiben wird. Wenn ein Benutzer einen alten Browser hat, wird der gültige Fallback nicht von dem neuen CSS überschrieben, da der Browser es als ungültig wahrnimmt.

Die Art und Menge des CSS, das ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehler sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es von der Art der At-Regel und dem Fehler ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert (fehlschlägt) wird.
- Wenn der [Fehler ein ungültiger Selektor](#fehler_in_selektorlisten) ist, wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, in diesem Fall werden mehrere Eigenschaften-Wert-Deklarationen ignoriert.
- Wenn der [Fehler ein Eigenschaftsname oder Wert](#fehler_innerhalb_von_css-deklarationsblöcken) ist, wie z. B. ein nicht erkannter Eigenschaftsname oder ungültiger Datentyp, wird die Eigenschafts-Wert-Deklaration ignoriert.
- Wenn der [Fehler auf ein fehlendes End-Klammerzeichen](#fehler_mit_automatisch_geschlossenem_ende) zurückzuführen ist, hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt anhand seiner erwarteten [Grammatik](#grammatiküberprüfung) für diese Konstruktion. Wenn der Inhalt nicht der erwarteten Grammatik für diese Konstruktion entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Regel-Fehler

Das `@`-Symbol, das in CSS-Spezifikationen als `<at-keyword-token>` bekannt ist, zeigt den Beginn einer CSS-{{cssxref("at-rule")}} an. Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird von Seiten des Parsers nichts als ungültig angesehen. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) ist Teil des Präludium der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für diese spezielle At-Regel interpretiert.

Anweisungs-At-Regeln wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklarationen enthalten nur ein Präludium. Das Semikolon beendet die At-Regel sofort für [Anweisungs-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#statement_at-rules). Sind die Inhalte des Präludium gemäß der Grammatik für diese At-Regel ungültig, wird die At-Regel ignoriert, wobei der Browser das CSS nach dem nächsten Semikolon weiter parst. Beispielsweise wird eine `@import`-At-Regel ignoriert, wenn sie nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url(http://www.w3.org/2000/svg);
```

Wenn der Parser auf eine geschweifte Klammer (`{`) stößt, bevor ein Semikolon auftritt, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}}, enthalten einen Block von Deklarationen, die von geschweiften Klammern (`{}`) umgeben sind. Die öffnende geschweifte Klammer informiert den Browser darüber, wo das Präludium der At-Regel endet und der Körper der At-Regel beginnt. Der Parser sucht vorwärts nach passenden Blöcken (Inhalt umgeben von `()`, `{}`, oder `[]`), bis er eine schließende geschweifte Klammer (`}`) findet, die von keiner anderen geschweiften Klammer übereinstimmt wird: dies schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was, wenn überhaupt, die gesamte At-Regel ungültig macht. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Die Behandlung von ungültigem Inhalt hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) als auch einen [`src`](/de/docs/Web/CSS/@font-face/src)-Deskriptor. Wenn einer dieser Deskriptoren weggelassen oder ungültig ist, ist die gesamte `@font-face`-Regel ungültig. Das Hinzufügen eines nicht verwandten Deskriptors, eines anderen gültigen Schriftdeskriptors mit einem ungültigen Wert oder einer Eigenschaftsstildeklaration innerhalb des in `@font-face` verschachtelten Blocks macht die Schrifterklärung nicht ungültig. Solange der Schriftname und die Schriftquelle vorhanden und gültig sind, wird ungültiges CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird dennoch geparst.

Während die Grammatik der `@keyframes`-At-Regel sehr unterschiedlich von der Grammatik der `@font-face`-Regel ist, beeinflusst die Art des Fehlers immer noch, was ignoriert wird. Wichtige Deklarationen (gekennzeichnet mit der {{cssxref("important")}}-Kennzeichnung) und Eigenschaften, die nicht animiert werden können, werden in Keyframe-Regeln ignoriert, beeinträchtigen jedoch nicht andere Stile, die im selben Keyframe-Selektorblock deklariert sind. Wenn ein ungültiger Keyframe-Selektor (wie ein Prozentwert kleiner als `0%` oder größer als `100%`, oder eine {{cssxref("number")}} ohne `%`) enthalten ist, wird die Keyframe-Selektorliste ungültig und dementsprechend wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; er macht nicht die gesamte `@keyframes`-Deklaration ungültig. Das Einfügen von Stilen zwischen zwei Keyframe-Selektorblöcken führt jedoch dazu, dass die gesamte `@keyframes`-At-Regel ungültig wird.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel gibt es in regulären und verschachtelten Formen. Die `@layer`-Anweisungssyntax enthält nur das Präludium und endet mit einem Semikolon. Alternativ dazu hat die verschachtelte Syntax Schichtenstile, die zwischen geschweiften Klammern nach dem Präludium verschachtelt sind. Das Weglassen einer schließenden geschweiften Klammer kann ein logischer Fehler, aber kein Syntaxfehler sein. Im Falle einer fehlenden schließenden Klammer in `@layer` werden alle Stile, die nach der Stelle kommen, an der die schließende Klammer hätte sein sollen, so geparst, als wären sie in der Kaskadenebene definiert, die im Präludium der At-Regel definiert ist. Das CSS ist gültig, da keine Syntaxfehler vorliegen; nichts wird verworfen. Ein Syntaxfehler kann dazu führen, dass die benannte oder anonyme Schicht leer ist, aber sie wird dennoch erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie Sie beim Schreiben eines Selektors einen Fehler machen können, aber nur ungültige Selektoren verursachen, dass eine Selektorliste ungültig wird (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list)).

Wenn Sie einen {{cssxref("class_selectors", "class")}}, {{cssxref("id_selectors", "id")}}, oder {{cssxref("type_selectors", "type")}}-Selektor für eine Klasse, ID oder ein Element (oder ein benutzerdefiniertes Element) einschließen, das nicht existiert, mag es ein Logikfehler sein, aber es ist kein Syntaxfehler. Wenn Sie jedoch einen Tippfehler in einer Pseudo-Klasse oder einem Pseudo-Element haben, könnte dies einen ungültigen Selektor erzeugen, der ein Fehler ist, den der Parser beheben muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}}- oder {{cssxref(":where")}}-Pseudoklasse (die [fehlertolerante Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptiert) oder wenn der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nichts trifft. Die Selektorliste wird nicht ungültig gemacht.

Abgesehen von diesen Ausnahmen wird ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig machen und der gesamte Selektorblock wird ignoriert. Der Browser wird dann nach der schließenden geschweiften Klammer suchen und das Parsen von diesem Punkt an fortsetzen.

#### `-webkit-`-Ausnahme

Aufgrund von Altlasten durch die übermäßige Verwendung von browserspezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und Werten)](#vendor-präfixe) vermeiden Browser eine übermäßige Ungültigmachung von Selektorlisten, indem sie alle [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) behandeln, die mit einem nicht-case-sensitiven `-webkit-`-Präfix beginnen und nicht mit `()` enden, als gültig betrachten.

Das bedeutet, dass ein Pseudo-Element wie `::-webkit-works-only-in-samsung` eine Selektorliste nicht ungültig machen wird, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen wird das Pseudo-Element möglicherweise nicht erkannt oder unterstützt von dem Browser, aber es wird nicht dazu führen, dass die gesamte Selektorliste und der zugehörige Stilblock ignoriert werden. Andererseits wird ein unbekannter mit Funktion-Notation versehenes Selektor `::-webkit-imaginary-function()` die gesamte Selektorliste ungültig machen, und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Wenn es um CSS-Eigenschaften und Werte innerhalb eines Deklarationsblocks geht, wird, wenn entweder die Eigenschaft oder der Wert ungültig ist, dieses Eigenschafts-Wert-Paar ignoriert und verworfen. Wenn ein Benutzeragent eine Liste von Deklarationen parst oder interpretiert, führt unbekannte Syntax an einem beliebigen Punkt dazu, dass der Browser-Parser nur die aktuelle Deklaration verwirft. Er setzt das Parsen von CSS fort, nachdem das nächste Semikolon oder die schließende geschweifte Klammer aufgetreten ist, je nachdem, was zuerst eintritt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis er auf ein Semikolon stößt und beginnt dann erneut mit dem Parsen:

```css-nolint example-bad
p {
  /* Invalid syntax due to missing semi-colon */
  border-color: red
  background-color: green;

  /* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt darin, dass das Semikolon fehlt und die Deklaration nicht die letzte in diesem Selektorblock ist. Die Eigenschaft, der das Semikolon fehlt, wird ignoriert, ebenso das nachfolgende Eigenschaft-Wert-Paar, weil der Browser erst dann mit dem Parsen fortfährt, nachdem ein Semikolon oder eine schließende Klammer aufgetreten ist. Insbesondere wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber es ist kein Fehler. Da es syntaktisch gültig ist, wird es geparst und auf die Elemente angewendet, die dem Selektor entsprechen.

#### Vendor-Präfixe

Vendor-präfixierte Eigenschaftsnamen und Eigenschaftswerte werden, wenn sie von einem Browser nicht verstanden werden, als ungültig betrachtet und ignoriert. Nur die einzelnen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht das nächste Semikolon oder die schließende geschweifte Klammer und setzt dann das Parsen von dort fort.

Sie könnten auf älteres CSS stoßen, das folgendermaßen aussieht:

```css example-bad
/* Prefixed values */
.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  display: block flex;
}
/* Prefixed properties */
.rounded {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
```

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskadenordnung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) der [Erscheinungsordnung](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)-Regel, wenden Browser alle von ihnen verstandenen präfixierten Deklarationen an und überschreiben dann diese Werte mit der standardmäßigen unveränderten Version.

> [!NOTE]
> Vermeiden Sie, falls möglich, die Verwendung von präfixierten Eigenschaften oder Eigenschaftswerten. Wenn Sie sie verwenden müssen, deklarieren Sie die präfixierten Versionen vor der nicht-präfixierten Version, wie oben gezeigt.

### Fehler mit automatisch geschlossenem Ende

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenkette oder Kommentar noch offen ist, schließt der Parser automatisch alles, was offen gelassen wurde.

> [!NOTE]
> Dies gilt für externe Stylesheets, Selektorblöcke innerhalb eines HTML-{{HTMLElement("style")}}-Elements und Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, auch wenn er unvollständig ist, wird das CSS normal geparst. Zum Beispiel, wenn Sie es versäumen, eine `@keyframes`-Deklaration zu schließen, bevor Sie Ihren {{htmlelement("style")}} beenden, ist die Animation immer noch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das Versäumnis, CSS-Anweisungen ordnungsgemäß zu schließen, macht die Anweisungen nicht unbedingt ungültig. Dennoch sollten Sie die nachsichtige Natur von CSS nicht ausnutzen. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Es macht Ihr CSS leichter lesbar und wartbar und stellt sicher, dass der Browser das CSS wie beabsichtigt parst.

#### Ungeschlossene Kommentare

Ungeschlossene Kommentare sind Logikfehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, sind alle CSS-Codes bis zu einem schließenden Trennzeichen (`*/`) im nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst eintritt, Teil des Kommentars. Während ein ungeschlossener Kommentar Ihr CSS nicht ungültig macht, verursacht er, dass das CSS nach dem öffnenden Trennzeichen (`/*`) ignoriert wird.

```html example-bad
<style>
  /* this comment is not closed
  @keyframes move {
    0% {transform: translateX(0);}
    100% {transform: translateX(100vw);}
  }
</style>
<p style="/* another unclosed comment">Parsed as HTML.</p>
```

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber das schließende `</style>`-Tag schließt den ersten Kommentar und das `style`-Attributs schließendes Anführungszeichen schließt den zweiten Kommentar.

## Grammatiküberprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Benutzeragent, ob die Grammatik den Regeln für diese Deklaration folgt. Zum Beispiel, wenn ein Eigenschaftswert vom falschen Datentyp ist oder ein Deskriptor nicht für die beschriebene At-Regel gültig ist, wird der Inhalt, der nicht mit der erwarteten Grammatik übereinstimmt, als ungültig betrachtet und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Zum Beispiel akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder eine gültige {{cssxref("&lt;color&gt;")}} oder ein globales CSS-Schlüsselwort. Wenn der Wert, der einer Eigenschaft zugewiesen wird, vom falschen Typ ist, wie `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden bei der Deklaration im Allgemeinen als gültig angesehen, können jedoch ungültiges CSS erzeugen, wenn sie aufgerufen werden, d.h. sie können als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Werttyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft nach ihrem Auftreten, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen wird eine Eigenschaftserklärung ignoriert, wenn ein Eigenschaftswert ungültig ist, und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete Werte benutzerdefinierter Eigenschaften funktionieren jedoch etwas anders.

Wenn ein `var()`-Ersatz ungültig ist, wird die Deklaration nicht ignoriert und der [initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, möglicherweise jedoch nicht auf den erwarteten.

Sehen wir uns ein Beispiel an, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die benutzerdefinierte Eigenschaftserklärung gültig. Die `background-color`-Erklärung ist auch zur Berechnungszeit gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` durch `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Erklärung nicht als ungültig ignoriert. Vielmehr, wenn eine benutzerdefinierte Eigenschaft vom falschen Typ ist, wird, wenn die Eigenschaft vererbbar ist, der Wert von ihrem übergeordneten Element geerbt. Wenn die Eigenschaft nicht vererbbar ist, wird der Standard-Initialwert verwendet. Im Falle von `background-color` ist der Eigenschaftswert kein vererbter Wert, sodass der Initialwert von `transparent` verwendet wird.

Um den Fall einer benutzerdefinierten Eigenschaft besser zu kontrollieren, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Initialwert der Eigenschaft zu definieren:

```css example-good
@property --theme-color {
  syntax: "<color>";
  inherits: false;
  initial-value: rebeccapurple;
}
```

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [Syntax-Leitfaden](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
