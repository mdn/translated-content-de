---
title: HTML-Attributwert `<input type="email">`
short-title: <input type="email">
slug: Web/HTML/Reference/Elements/input/email
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{HTMLElement("input")}}-Elemente vom Typ **`email`** ermöglichen es Benutzern, eine E-Mail-Adresse einzugeben und zu bearbeiten. Wenn das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) angegeben ist, können sie auch eine Liste von E-Mail-Adressen eingeben.

Der Eingabewert wird vor dem Absenden des Formulars automatisch darauf geprüft, ob er entweder leer oder eine korrekt formatierte E-Mail-Adresse beziehungsweise eine Liste solcher Adressen ist. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden entsprechend automatisch angewendet, um sichtbar zu machen, ob der aktuelle Feldwert eine gültige E-Mail-Adresse ist.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;email&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="email">Enter your example.com email:</label>

<input type="email" id="email" pattern=".+@example\.com" size="30" required />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des {{HTMLElement("input")}}-Elements enthält eine Zeichenfolge, die automatisch darauf geprüft wird, ob sie der Syntax für E-Mail-Adressen entspricht. Genauer gesagt bestehen drei mögliche Wertformate die Validierung:

1. Eine leere Zeichenfolge (`""`), die anzeigt, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne, korrekt formatierte E-Mail-Adresse. Das bedeutet nicht zwangsläufig, dass die Adresse existiert, sondern nur, dass sie zumindest korrekt formatiert ist. Beispiele sind `username@domain` und `username@domain.tld`. Die Anforderungen sind allerdings komplexer; unter [Validierung](#validierung) finden Sie einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der dem Algorithmus zur Validierung von E-Mail-Adressen entspricht.
3. Wenn und nur wenn das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) angegeben ist, kann der Wert eine Liste korrekt formatierter, durch Kommas getrennter E-Mail-Adressen sein. Führende und nachgestellte Leerzeichen werden bei jeder Adresse in der Liste entfernt.

Unter [Validierung](#validierung) erfahren Sie, wie E-Mail-Adressen auf korrekte Formatierung geprüft werden.

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen Eingabefelder vom Typ `email` die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann E-Mail-Eingabefeldern hinzugefügt werden, sein gespeicherter Zustand ist jedoch immer `off`.

### list

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}}-Element stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für dieses Eingabefeld vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) vereinbar sind, werden nicht in die Vorschläge aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Vorgaben: Benutzer können einen Wert aus der vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Länge der Zeichenfolge, gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}, die Benutzer in das `email`-Eingabefeld eingeben können. Der Wert muss eine Ganzzahl größer oder gleich 0 sein. Wenn `maxlength` nicht angegeben ist oder einen ungültigen Wert hat, besitzt das `email`-Eingabefeld keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die [Gültigkeitsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) für das Eingabefeld schlägt fehl, wenn der Textwert des Feldes länger als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Gültigkeitsprüfung wird nur angewendet, wenn der Benutzer den Wert ändert.

### minlength

Die minimale Länge der Zeichenfolge, gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}, die Benutzer in das `email`-Eingabefeld eingeben können. Der Wert muss eine nicht negative Ganzzahl sein, die kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn `minlength` nicht angegeben ist oder einen ungültigen Wert hat, besitzt das `email`-Eingabefeld keine minimale Länge.

Die [Gültigkeitsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) für das Eingabefeld schlägt fehl, wenn der in das Feld eingegebene Text kürzer als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Gültigkeitsprüfung wird nur angewendet, wenn der Benutzer den Wert ändert.

### multiple

Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass Benutzer mehrere E-Mail-Adressen eingeben können, getrennt durch Kommas und optional durch Leerraumzeichen. Ein Beispiel finden Sie unter [Mehrere E-Mail-Adressen zulassen](#mehrere_e-mail-adressen_zulassen); weitere Einzelheiten unter [HTML-Attribut: multiple](/de/docs/Web/HTML/Reference/Attributes/multiple).

> [!NOTE]
> Wenn Sie das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) angeben, muss der Benutzer normalerweise eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig gilt. Wenn Sie jedoch das Attribut `multiple` hinzufügen, ist auch eine Liste mit null E-Mail-Adressen – eine leere Zeichenfolge oder eine Zeichenfolge, die ausschließlich aus Leerraum besteht – ein gültiger Wert. Mit anderen Worten: Wenn `multiple` angegeben ist, muss der Benutzer unabhängig vom Wert von `required` nicht einmal eine einzige E-Mail-Adresse eingeben.

### pattern

Wenn das Attribut `pattern` angegeben ist, enthält es einen regulären Ausdruck, mit dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefeldes übereinstimmen muss, um die [Gültigkeitsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom Typ {{jsxref("RegExp")}} verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) beschrieben wird. Beim Kompilieren des regulären Ausdrucks wird das Flag `'u'` gesetzt, sodass das Muster als Folge von Unicode-Codepunkten statt als {{Glossary("ASCII", "ASCII")}} behandelt wird. Der Mustertext darf nicht von Schrägstrichen umschlossen sein.

Wenn kein Muster angegeben wurde oder das angegebene Muster ungültig ist, wird kein regulärer Ausdruck angewendet und das Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das Attribut [`title`](/de/docs/Web/HTML/Reference/Elements/input#title), um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen und der die Anforderungen für eine Übereinstimmung mit dem Muster erklärt. Stellen Sie auch in der Nähe weiteren erklärenden Text bereit.

Einzelheiten und ein Beispiel finden Sie im Abschnitt [Validierung anhand eines Musters](#validierung_anhand_eines_musters).

### `placeholder`

Das Attribut `placeholder` ist eine Zeichenfolge, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Wortgruppe sein, die den erwarteten Datentyp veranschaulicht, und keine ausführliche Erklärung. Der Text darf _keine_ Wagenrückläufe oder Zeilenvorschübe enthalten.

Wenn der Inhalt des Steuerelements eine Schreibrichtung hat ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}), der Platzhalter aber in der entgegengesetzten Richtung dargestellt werden muss, können Sie Formatierungszeichen des bidirektionalen Unicode-Algorithmus verwenden, um die Schreibrichtung innerhalb des Platzhalters zu ändern. Weitere Informationen finden Sie unter [Unicode-Steuerzeichen für bidirektionalen Text verwenden](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des Attributs `placeholder`. Es ist semantisch weniger aussagekräftig als andere Möglichkeiten, ein Formular zu erklären, und kann unerwartete technische Probleme mit Ihren Inhalten verursachen. Weitere Informationen finden Sie unter [Beschriftungen für `<input>`](/de/docs/Web/HTML/Reference/Elements/input#labels).

### `readonly`

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass der Benutzer dieses Feld nicht bearbeiten kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die Eigenschaft `value` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingabefelder, für die auch das Attribut `readonly` angegeben ist.

### `size`

Das Attribut `size` ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss größer als null sein; der Standardwert ist 20. Da die Breite von Zeichen variiert, ist dies möglicherweise nicht exakt. Je nach Zeichen und Schriftart (den verwendeten {{cssxref("font")}}-Einstellungen) kann das resultierende Eingabefeld schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dadurch wird _nicht_ begrenzt, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es wird lediglich ungefähr festgelegt, wie viele Zeichen gleichzeitig sichtbar sind. Verwenden Sie das Attribut [`maxlength`](#maxlength), um eine Obergrenze für die Länge der Eingabedaten festzulegen.

## E-Mail-Eingabefelder verwenden

E-Mail-Adressen gehören zu den am häufigsten eingegebenen Textdaten im Web: Sie werden bei der Anmeldung auf Websites, bei Informationsanfragen, für Bestellbestätigungen, für Webmail und vieles mehr verwendet. Der Eingabetyp `email` kann Ihnen als Webentwickler die Arbeit daher erheblich erleichtern, weil er die Erstellung der Benutzeroberfläche und der Logik für E-Mail-Adressen vereinfacht. Wenn Sie ein Eingabefeld mit dem passenden `type`-Wert `email` erstellen, wird der eingegebene Text automatisch darauf geprüft, ob er zumindest das Format einer potenziell gültigen E-Mail-Adresse hat. So lässt sich vermeiden, dass Benutzer ihre Adresse falsch eingeben oder eine ungültige Adresse angeben.

Beachten Sie jedoch, dass dies nicht ausreicht, um sicherzustellen, dass die angegebene E-Mail-Adresse tatsächlich existiert, zum Benutzer der Website gehört oder aus anderen Gründen akzeptabel ist. Es wird lediglich sichergestellt, dass der Feldwert wie eine E-Mail-Adresse formatiert ist.

> [!NOTE]
> Ebenso wichtig ist, dass Benutzer Ihr HTML im Hintergrund verändern können. Ihre Website darf diese Validierung daher _nicht_ für Sicherheitszwecke verwenden. Sie _müssen_ die E-Mail-Adresse serverseitig bei jedem Vorgang überprüfen, bei dem der angegebene Text irgendwelche Auswirkungen auf die Sicherheit haben könnte.

### Ein einfaches E-Mail-Eingabefeld

Derzeit stellen alle Browser, die dieses Element implementieren, es als gewöhnliches Texteingabefeld mit grundlegenden Validierungsfunktionen dar. Die Spezifikation lässt Browsern hier jedoch Spielraum. Beispielsweise könnte das Element in das integrierte Adressbuch des Geräts eines Benutzers eingebunden werden, sodass sich E-Mail-Adressen aus dieser Liste auswählen lassen. In seiner einfachsten Form lässt sich ein `email`-Eingabefeld wie folgt implementieren:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_basic_email_input', 600, 40) }}

Beachten Sie, dass das Feld als gültig gilt, wenn es leer ist oder eine einzelne korrekt formatierte E-Mail-Adresse eingegeben wurde. Andernfalls gilt es als ungültig. Wenn Sie das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) hinzufügen, sind nur korrekt formatierte E-Mail-Adressen zulässig; ein leeres Eingabefeld gilt dann nicht mehr als gültig.

### Mehrere E-Mail-Adressen zulassen

Durch Hinzufügen des booleschen Attributs [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) können Sie das Eingabefeld so konfigurieren, dass es mehrere E-Mail-Adressen akzeptiert.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Das Eingabefeld gilt nun als gültig, wenn eine einzelne E-Mail-Adresse eingegeben wurde oder wenn beliebig viele E-Mail-Adressen vorhanden sind, die durch Kommas und optional durch Leerraumzeichen getrennt sind.

> [!NOTE]
> Bei Verwendung von `multiple` _darf_ der Wert leer sein.

Einige Beispiele für gültige Zeichenfolgen, wenn `multiple` angegeben ist:

- `""`
- `"me@example"`
- `"me@example.org"`
- `"me@example.org,you@example.org"`
- `"me@example.org, you@example.org"`
- `"me@example.org,you@example.org, us@example.org"`

Einige Beispiele für ungültige Zeichenfolgen:

- `","`
- `"me"`
- `"me@example.org you@example.org"`

### Platzhalter

Manchmal ist es hilfreich, direkt im Eingabefeld einen Hinweis auf das erwartete Format der Daten zu geben. Das kann besonders wichtig sein, wenn das Seitendesign keine beschreibende Beschriftung für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter veranschaulicht anhand eines gültigen Beispiels, welches Format der `value` haben sollte. Er wird im Eingabefeld angezeigt, solange der `value` des Elements `""` ist. Sobald Daten eingegeben werden, verschwindet der Platzhalter; wird das Feld geleert, erscheint er erneut.

Hier verwenden wir ein `email`-Eingabefeld mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Eingabefeldes ändern.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Größe des Eingabefeldes steuern

Sie können sowohl die sichtbare Breite des Eingabefeldes als auch die zulässige Mindest- und Höchstlänge des eingegebenen Textes steuern.

#### Sichtbare Größe des Eingabeelements

Die sichtbare Größe des Eingabefeldes lässt sich mit dem Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) steuern. Damit können Sie festlegen, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email`-Eingabefeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

`size` ist unabhängig von der Längenbegrenzung der eingegebenen E-Mail-Adresse. Dadurch können Felder wenig Platz einnehmen und dennoch die Eingabe längerer E-Mail-Adressen ermöglichen. Mit dem Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) können Sie die Mindestlänge der eingegebenen E-Mail-Adresse in Zeichen festlegen; mit [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) legen Sie entsprechend die Höchstlänge fest.

Das folgende Beispiel erstellt ein Eingabefeld für E-Mail-Adressen mit einer Breite von 32 Zeichen. Sein Inhalt muss mindestens 3 und darf höchstens 64 Zeichen lang sein.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Standardoptionen bereitstellen

#### Einen einzelnen Standardwert mit dem Attribut value festlegen

Wie üblich können Sie für ein `email`-Eingabefeld einen Standardwert bereitstellen, indem Sie sein Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) setzen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Werte vorschlagen

Darüber hinaus können Sie mit dem Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) eine Liste von Optionen bereitstellen, aus denen Benutzer auswählen können. Dadurch sind Benutzer nicht auf diese Optionen beschränkt, können aber häufig verwendete E-Mail-Adressen schneller auswählen. Die Liste liefert außerdem Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das Attribut `list` gibt die ID eines {{HTMLElement("datalist")}}-Elements an. Dieses enthält für jeden vorgeschlagenen Wert ein {{HTMLElement("option")}}-Element; der `value` jedes `option`-Elements ist der entsprechende Vorschlagswert für das E-Mail-Eingabefeld.

```html
<input type="email" size="40" list="defaultEmails" />

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk"></option>
  <option value="jbourne@unknown.net"></option>
  <option value="nfury@shield.org"></option>
  <option value="tony@starkindustries.com"></option>
  <option value="hulk@grrrrrrrr.arg"></option>
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}-Elementen bietet der Browser die angegebenen Werte als mögliche E-Mail-Adressen an. In der Regel werden sie in einem Popup oder Dropdown-Menü angezeigt. Die genaue Bedienung kann sich je nach Browser unterscheiden. Üblicherweise erscheint beim Klicken in das Eingabefeld eine Dropdown-Liste mit vorgeschlagenen E-Mail-Adressen. Während der Benutzer tippt, wird die Liste gefiltert, sodass nur passende Werte angezeigt werden. Mit jedem eingegebenen Zeichen wird die Liste weiter eingegrenzt, bis der Benutzer einen Vorschlag auswählt oder einen eigenen Wert eingibt.

## Validierung

Für `email`-Eingabefelder stehen zwei Ebenen der Inhaltsvalidierung zur Verfügung. Zunächst gibt es die standardmäßige Validierung, die für alle {{HTMLElement("input")}}-Elemente verfügbar ist und automatisch sicherstellt, dass der Inhalt die Anforderungen an das Format einer gültigen E-Mail-Adresse erfüllt. Zusätzlich können Sie bei Bedarf weitere Filter hinzufügen, um eigene spezielle Anforderungen zu erfüllen.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass eingegebene Daten das richtige Format haben. Es ist viel zu einfach, das HTML so zu verändern, dass die Validierung umgangen oder vollständig entfernt wird. Es ist auch möglich, Ihr HTML ganz zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, kann die Eingabe falsch formatierter Daten – oder von Daten, die zu groß sind, den falschen Typ haben und so weiter – in Ihre Datenbank schwerwiegende Folgen haben.

### Grundlegende Validierung

Browser prüfen automatisch, ob der eingegebene Text dem Standardformat für Internet-E-Mail-Adressen entspricht. Sie verwenden dazu einen Algorithmus, der dem folgenden regulären Ausdruck entspricht:

```js
/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
```

Weitere Informationen zur Funktionsweise der Formularvalidierung und dazu, wie Sie die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} verwenden können, um das Eingabefeld je nach Gültigkeit seines aktuellen Werts zu gestalten, finden Sie unter [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Im Zusammenhang mit internationalisierten Domainnamen und der Validierung von E-Mail-Adressen in HTML sind Probleme mit der Spezifikation bekannt. Einzelheiten finden Sie unter [W3C-Bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) und [whatwg/html#4562](https://github.com/whatwg/html/issues/4562).

### Validierung anhand eines Musters

Wenn Sie die zulässigen E-Mail-Adressen stärker einschränken möchten als auf „jede Zeichenfolge, die wie eine E-Mail-Adresse aussieht“, können Sie mit dem Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) einen {{Glossary("regular_expression", "regulären Ausdruck")}} festlegen, mit dem der Wert übereinstimmen muss, um gültig zu sein. Wenn das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) angegeben ist, muss jeder einzelne Eintrag in der kommagetrennten Werteliste dem {{Glossary("regular_expression", "regulären Ausdruck")}} entsprechen.

Angenommen, Sie erstellen eine Seite für Mitarbeiter von Best Startup Ever, Inc., über die sie ihre IT-Abteilung um Hilfe bitten können. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse und eine Nachricht eingeben, die das Problem beschreibt. Wir möchten nicht nur sicherstellen, dass der Benutzer eine gültige E-Mail-Adresse angibt, sondern verlangen aus Sicherheitsgründen auch, dass es sich um eine interne geschäftliche E-Mail-Adresse handelt.

Da Eingabefelder vom Typ `email` sowohl anhand der standardmäßigen E-Mail-Validierung _als auch_ anhand des angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) geprüft werden, lässt sich dies einfach umsetzen. Sehen wir uns an, wie:

```css hidden
body {
  font: 16px sans-serif;
}

.emailBox {
  padding-bottom: 20px;
}

.messageBox {
  padding-bottom: 20px;
}

label {
  line-height: 22px;
}

label::after {
  content: ":";
}
```

```html
<form>
  <div class="emailBox">
    <label for="emailAddress">Your email address</label><br />
    <input
      id="emailAddress"
      type="email"
      size="64"
      maxlength="64"
      required
      placeholder="username@beststartupever.com"
      pattern=".+@beststartupever\.com"
      title="Please provide only a Best Startup Ever corporate email address" />
  </div>

  <div class="messageBox">
    <label for="message">Request</label><br />
    <textarea
      id="message"
      cols="80"
      rows="8"
      required
      placeholder="My shoes are too tight, and I have forgotten how to dance."></textarea>
  </div>
  <input type="submit" value="Send Request" />
</form>
```

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

{{EmbedLiveSample("Pattern_validation", 700, 300)}}

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, eine {{HTMLElement("textarea")}} für seine Nachricht an die IT-Abteilung und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Reference/Elements/input/submit), das eine Schaltfläche zum Absenden des Formulars erzeugt. Jedem Texteingabefeld ist ein {{HTMLElement("label")}} zugeordnet, damit der Benutzer weiß, welche Eingabe erwartet wird.

Sehen wir uns das Eingabefeld für die E-Mail-Adresse genauer an. Die Attribute [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) sind beide auf 64 gesetzt. So ist das Feld breit genug, um ungefähr 64 Zeichen einer E-Mail-Adresse anzuzeigen, und die tatsächlich eingegebene Zeichenanzahl wird auf höchstens 64 begrenzt. Das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) sorgt dafür, dass eine gültige E-Mail-Adresse angegeben werden muss.

Ein passender [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) – `username@beststartupever.com` – veranschaulicht eine gültige Eingabe. Die Zeichenfolge zeigt sowohl, dass eine E-Mail-Adresse eingegeben werden soll, als auch, dass es sich um ein Unternehmenskonto bei beststartupever.com handeln sollte. Zusätzlich stellt der Typ `email` durch Validierung sicher, dass der Text wie eine E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, wird ungefähr folgende Fehlermeldung angezeigt:

![Ungültige E-Mail-Adresse: Das Eingabefeld zeigt eine Fehlermeldung mit dem Text „please enter an email address“.](enter-valid-email-address.png)

Wenn wir es dabei beließen, würden wir zumindest auf korrekt formatierte E-Mail-Adressen prüfen. Wir möchten aber noch einen Schritt weitergehen und sicherstellen, dass die E-Mail-Adresse tatsächlich das Format `[username]@beststartupever.com` hat. Dafür verwenden wir [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern). Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck verlangt eine Zeichenfolge, die aus mindestens einem beliebigen Zeichen besteht, gefolgt von einem „@“ und dem Domainnamen „beststartupever.com“.

Beachten Sie, dass dies für sich genommen keineswegs ein ausreichender Filter für gültige E-Mail-Adressen ist. Er würde beispielsweise „ @beststartupever.com“ (mit einem führenden Leerzeichen) oder „@@beststartupever.com“ zulassen, obwohl beides ungültig ist. Der Browser prüft den angegebenen Text jedoch sowohl anhand der standardmäßigen E-Mail-Validierung _als auch_ anhand unseres eigenen Musters. Im Ergebnis wird geprüft: „Stellen Sie sicher, dass dies wie eine gültige E-Mail-Adresse aussieht, und wenn das der Fall ist, dass es außerdem eine Adresse bei beststartupever.com ist.“

Es empfiehlt sich, das Attribut [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) zusammen mit `pattern` zu verwenden. In diesem Fall _muss_ `title` das Muster beschreiben. Es sollte also erklären, welches Format die Daten haben müssen, statt andere Informationen zu enthalten. Der Grund dafür ist, dass `title` als Teil einer Validierungsfehlermeldung angezeigt oder vorgelesen werden kann. Beispielsweise könnte der Browser die Meldung „The entered text doesn't match the required pattern.“ anzeigen, gefolgt von Ihrem angegebenen `title`. Wenn Ihr `title` etwa „Email address“ lautet, ergäbe sich die wenig hilfreiche Meldung „The entered text doesn't match the required pattern. Email address“.

Deshalb geben wir stattdessen die Zeichenfolge „Please provide only a Best Startup Ever corporate email address“ an. Die vollständige Fehlermeldung könnte dann etwa lauten: „The entered text doesn't match the required pattern. Please provide only a Best Startup Ever corporate email address.“

![Eine gültige E-Mail-Adresse, bei der das Eingabefeld dennoch eine Fehlermeldung anzeigt: „The entered text doesn't match the required pattern. Please provide only a Best Startup Ever corporate email address.“](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Ihre regulären Ausdrücke für die Validierung nicht wie erwartet funktionieren, prüfen Sie die Konsole Ihres Browsers. Dort finden Sie möglicherweise hilfreiche Fehlermeldungen.

## Beispiele

Hier haben wir ein E-Mail-Eingabefeld mit der ID `emailAddress`, das höchstens 256 Zeichen zulässt. Das Eingabefeld selbst ist 64 Zeichen breit und zeigt `user@example.gov` als Platzhalter an, solange es leer ist. Durch das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) können Benutzer außerdem null oder mehr durch Kommas getrennte E-Mail-Adressen eingeben, wie unter [Mehrere E-Mail-Adressen zulassen](#mehrere_e-mail-adressen_zulassen) beschrieben. Schließlich enthält das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) die ID eines {{HTMLElement("datalist")}}-Elements, dessen {{HTMLElement("option")}}-Elemente eine Reihe vorgeschlagener Werte angeben, aus denen der Benutzer wählen kann.

Zusätzlich wird mit einem {{HTMLElement("label")}}-Element eine Beschriftung für das E-Mail-Eingabefeld erstellt. Sein Attribut [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) verweist auf die ID `emailAddress` des {{HTMLElement("input")}}-Elements. Durch diese Verknüpfung der beiden Elemente erhält das Eingabefeld den Fokus, wenn auf die Beschriftung geklickt wird.

```html
<label for="emailAddress">Email</label><br />
<input
  id="emailAddress"
  type="email"
  placeholder="user@example.gov"
  list="defaultEmails"
  size="64"
  maxlength="256"
  multiple />

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk"></option>
  <option value="jbourne@unknown.net"></option>
  <option value="nfury@shield.org"></option>
  <option value="tony@starkindustries.com"></option>
  <option value="hulk@grrrrrrrr.arg"></option>
</datalist>
```

{{EmbedLiveSample('Examples', 600, 80)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die eine E-Mail-Adresse darstellt, oder
        leer
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#multiple"><code>multiple</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#name"><code>name</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a> und
        <a href="/de/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><code>list</code> und <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td>
        ohne <code>list</code>-Attribut:
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code><br />
        mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
- [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url)
- Attribute:
  - [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)
  - [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)
  - [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
