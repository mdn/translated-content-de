---
title: Wie Sie ein Webformular strukturieren
slug: Learn/Forms/How_to_structure_a_web_form
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

Nachdem wir die Grundlagen behandelt haben, werden wir nun genauer auf die Elemente schauen, die verwendet werden, um den verschiedenen Teilen eines Formulars Struktur und Bedeutung zu verleihen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Verständnis von HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie HTML-Formulare strukturiert und semantisch korrekt gestaltet werden, damit sie benutzbar und zugänglich sind.
      </td>
    </tr>
  </tbody>
</table>

Die Flexibilität von Formularen macht sie zu einer der komplexesten Strukturen in [HTML](/de/docs/Learn/HTML); Sie können jede Art eines grundlegenden Formulars mithilfe dedizierter Formularelemente und Attribute erstellen. Wenn Sie die korrekte Struktur beim Erstellen eines HTML-Formulars verwenden, wird sichergestellt, dass das Formular sowohl benutzbar als auch [zugänglich](/de/docs/Learn/Accessibility) ist.

## Das `<form>`-Element

Das {{HTMLElement("form")}}-Element definiert formal ein Formular und Attribute, die das Verhalten des Formulars bestimmen. Jedes Mal, wenn Sie ein HTML-Formular erstellen möchten, müssen Sie mit diesem Element beginnen und alle Inhalte darin verschachteln. Viele unterstützende Technologien und Browser-Plugins können {{HTMLElement("form")}}-Elemente entdecken und spezielle Funktionen implementieren, um sie benutzerfreundlicher zu machen.

Das haben wir bereits im vorherigen Artikel kennengelernt.

> [!WARNING]
> Es ist streng verboten, ein Formular innerhalb eines anderen Formulars zu verschachteln. Eine Verschachtelung kann dazu führen, dass Formulare unvorhersehbar agieren, daher ist es eine schlechte Idee.

Es ist immer möglich, eine Formularkontrolle außerhalb eines {{HTMLElement("form")}}-Elements zu verwenden. Wenn Sie dies tun, hat diese Kontrolle standardmäßig nichts mit einem Formular zu tun, es sei denn, Sie ordnen es mit seinem [`form`](/de/docs/Web/HTML/Element/input#form)-Attribut einem Formular zu. Dies wurde eingeführt, um Ihnen zu ermöglichen, eine Kontrolle explizit mit einem Formular zu binden, selbst wenn sie nicht darin verschachtelt ist.

Lassen Sie uns weitermachen und die strukturellen Elemente behandeln, die Sie in einem Formular finden werden.

## Die `<fieldset>`- und `<legend>`-Elemente

Das {{HTMLElement("fieldset")}}-Element ist eine bequeme Möglichkeit, Gruppen von Widgets zu erstellen, die denselben Zweck teilen, sowohl aus stilistischen als auch aus semantischen Gründen. Sie können ein {{HTMLElement("fieldset")}} beschriften, indem Sie ein {{HTMLElement("legend")}}-Element direkt unter dem öffnenden {{HTMLElement("fieldset")}}-Tag einfügen. Der Textinhalt des {{HTMLElement("legend")}} beschreibt formell den Zweck des enthaltenen {{HTMLElement("fieldset")}}.

Viele unterstützende Technologien verwenden das {{HTMLElement("legend")}}-Element, als ob es Teil der Beschriftung jeder Kontrolle innerhalb des entsprechenden {{HTMLElement("fieldset")}}-Elements wäre. Zum Beispiel sprechen einige Screenreader wie [Jaws](https://www.freedomscientific.com/products/software/jaws/) und [NVDA](https://www.nvaccess.org/) den Inhalt der Legende, bevor sie die Beschriftung jeder Kontrolle ansprechen.

Ein kleines Beispiel:

```html
<form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small" />
      <label for="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium" />
      <label for="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large" />
      <label for="size_3">Large</label>
    </p>
  </fieldset>
</form>
```

> [!NOTE]
> Sie finden dieses Beispiel in [fieldset-legend.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/fieldset-legend.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)).

Beim Lesen des obigen Formulars würde ein Screenreader „Fruchtsaftgröße klein“ für das erste Widget, „Fruchtsaftgröße mittel“ für das zweite und „Fruchtsaftgröße groß“ für das dritte sprechen.

Das Anwendungsszenario in diesem Beispiel ist eines der wichtigsten. Jedes Mal, wenn Sie eine Gruppe von Optionsschaltflächen haben, sollten Sie diese in einem {{HTMLElement("fieldset")}}-Element verschachteln. Es gibt andere Anwendungsfälle, und im Allgemeinen kann das {{HTMLElement("fieldset")}}-Element auch verwendet werden, um ein Formular zu unterteilen. Idealerweise sollten lange Formulare auf mehrere Seiten aufgeteilt werden, aber wenn ein Formular lang wird und auf einer einzigen Seite sein muss, verbessert das Platzieren der verschiedenen verwandten Abschnitte innerhalb verschiedener Fieldsets die Benutzerfreundlichkeit.

Aufgrund seines Einflusses auf unterstützende Technologie ist das {{HTMLElement("fieldset")}}-Element eines der Schlüsselelemente zum Erstellen zugänglicher Formulare; es liegt jedoch in Ihrer Verantwortung, es nicht zu missbrauchen. Wenn möglich, versuchen Sie jedes Mal, wenn Sie ein Formular erstellen, [zu hören, wie ein Screenreader](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers) es interpretiert. Wenn es seltsam klingt, versuchen Sie, die Formularstruktur zu verbessern.

## Das `<label>`-Element

Wie wir im vorherigen Artikel gesehen haben, ist das {{HTMLElement("label")}}-Element der formale Weg, ein Label für ein HTML-Formular-Widget zu definieren. Dies ist das wichtigste Element, wenn Sie zugängliche Formulare erstellen möchten — bei ordnungsgemäßer Implementierung sprechen Screenreader das Label eines Formularelements zusammen mit allen zugehörigen Anweisungen, und es ist auch nützlich für sehende Benutzer. Nehmen Sie dieses Beispiel, das wir im vorherigen Artikel gesehen haben:

```html
<label for="name">Name:</label> <input type="text" id="name" name="user_name" />
```

Mit dem `<label>`, das korrekt über sein `for`-Attribut (das die `id`-Attribut des `<input>`-Elements enthält) mit dem `<input>` verbunden ist, wird ein Screenreader etwas wie "Name, Text bearbeiten" vorlesen.

Es gibt eine andere Möglichkeit, eine Formularkontrolle mit einem Label zu verknüpfen — verschachteln Sie die Formularkontrolle innerhalb des `<label>`, was eine implizite Verknüpfung herstellt.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Selbst in solchen Fällen wird jedoch empfohlen, das `for`-Attribut zu setzen, um sicherzustellen, dass alle unterstützenden Technologien die Verbindung zwischen Label und Widget verstehen.

Wenn kein Label vorhanden ist oder die Formularkontrolle weder implizit noch explizit mit einem Label verbunden ist, wird ein Screenreader etwas wie "Edit text blank" vorlesen, was nicht sehr hilfreich ist.

### Labels sind auch anklickbar!

Ein weiterer Vorteil richtig eingerichteter Labels ist, dass Sie das entsprechende Widget durch Klicken oder Tippen auf das Label aktivieren können. Dies ist nützlich bei Kontrollen wie Texteingaben, bei denen Sie auf das Label sowie auf die Eingabe klicken können, um den Fokus darauf zu setzen, es ist jedoch besonders nützlich bei Optionsfeldern und Kontrollkästchen — der Trefferbereich einer solchen Kontrolle kann sehr klein sein, daher ist es hilfreich, es so einfach wie möglich zu aktivieren.

Zum Beispiel wird durch Klicken auf den Text "Ich mag Kirsche" im folgenden Beispiel der ausgewählte Zustand des _taste_cherry_ Kontrollkästchens umgeschaltet:

```html
<form>
  <p>
    <input type="checkbox" id="taste_1" name="taste_cherry" value="cherry" />
    <label for="taste_1">I like cherry</label>
  </p>
  <p>
    <input type="checkbox" id="taste_2" name="taste_banana" value="banana" />
    <label for="taste_2">I like banana</label>
  </p>
</form>
```

> [!NOTE]
> Sie finden dieses Beispiel in [checkbox-label.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/checkbox-label.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)).

### Mehrere Labels

Genau genommen können Sie mehrere Labels auf ein einzelnes Widget setzen, aber das ist keine gute Idee, da einige assistierende Technologien Schwierigkeiten damit haben können. Im Fall von mehreren Labels sollten Sie ein Widget und seine Labels innerhalb eines einzelnen {{htmlelement("label")}}-Elements verschachteln.

Betrachten wir dieses Beispiel:

```html
<p>Required fields are followed by <span aria-label="required">*</span>.</p>

<!-- So this: -->
<!--div>
  <label for="username">Name:</label>
  <input id="username" type="text" name="username" required>
  <label for="username"><span aria-label="required">*</label>
</div-->

<!-- would be better done like this: -->
<!--div>
  <label for="username">
    <span>Name:</span>
    <input id="username" type="text" name="username" required>
    <span aria-label="required">*</span>
  </label>
</div-->

<!-- But this is probably best: -->
<div>
  <label for="username">Name: <span aria-label="required">*</span></label>
  <input id="username" type="text" name="username" required />
</div>
```

{{EmbedLiveSample("Multiple_labels", 120, 120)}}

Der Absatz oben stellt eine Regel für erforderliche Elemente auf. Die Regel muss _bevor_ sie verwendet wird enthalten sein, damit sehende Benutzer und Benutzer von assistierenden Technologien wie Screenreader lernen können, was sie bedeutet, bevor sie auf ein erforderliches Element stoßen. Während dies hilft, Benutzer darüber zu informieren, was ein Sternchen bedeutet, kann man sich nicht darauf verlassen. Ein Screenreader wird ein Sternchen als "_star_" aussprechen, wenn er darauf stößt. Wenn es von einem sehenden Benutzer mit der Maus überfahren wird, sollte "_required_" erscheinen, was durch Verwendung des `title`-Attributs erreicht wird. Das Vorlesen von Titeln hängt von den Einstellungen des Screenreaders ab, daher ist es zuverlässiger, auch das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut zu verwenden, das immer von Screenreadern vorgelesen wird.

Die oben genannten Varianten nehmen an Effektivität zu, während Sie sie durchgehen:

- Im ersten Beispiel wird das Label überhaupt nicht mit der Eingabe vorgelesen — Sie bekommen nur "edit text blank", und die tatsächlichen Labels werden getrennt vorgelesen. Die multiplen `<label>`-Elemente verwirren den Screenreader.
- Im zweiten Beispiel sind die Dinge ein wenig klarer — das Label, das mit der Eingabe vorgelesen wird, ist "name star name edit text required", und die Labels werden immer noch getrennt vorgelesen. Die Dinge sind immer noch ein wenig verwirrend, aber es ist ein wenig besser, da das `<input>` ein Label zugeordnet hat.
- Das dritte Beispiel ist das Beste — das tatsächliche Label wird vollständig zusammen vorgelesen, und das Label, das mit der Eingabe vorgelesen wird, ist "name required edit text".

> [!NOTE]
> Möglicherweise erzielen Sie leicht unterschiedliche Ergebnisse, abhängig von Ihrem Screenreader. Dies wurde in VoiceOver getestet (und NVDA verhält sich ähnlich). Wir würden auch gerne von Ihren Erfahrungen hören.

> [!NOTE]
> Sie können dieses Beispiel auf GitHub unter [required-labels.html](https://github.com/mdn/learning-area/blob/main/html/forms/html-form-structure/required-labels.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/html-form-structure/required-labels.html)). Testen Sie das Beispiel nicht mit 2 oder 3 der Versionen, die nicht kommentiert sind — Screenreader werden definitiv verwirrt, wenn Sie mehrere Labels UND mehrere Eingaben mit derselben ID haben!

## Gemeinsame HTML-Strukturen, die mit Formularen verwendet werden

Über die spezifischen Strukturen von Webformularen hinaus ist es gut zu erinnern, dass Formularkennzeichnungen einfach HTML sind. Dies bedeutet, dass Sie die gesamte Kraft von HTML nutzen können, um ein Webformular zu strukturieren.

Wie Sie in den Beispielen sehen können, ist es gängige Praxis, ein Label und sein Widget mit einem {{HTMLElement("li")}}-Element innerhalb einer {{HTMLElement("ul")}} oder {{HTMLElement("ol")}}-Liste zu umschließen. {{HTMLElement("p")}} und {{HTMLElement("div")}}-Elemente werden ebenfalls häufig verwendet. Listen werden empfohlen, um mehrere Kontrollkästchen oder Optionsfelder zu strukturieren.

Neben dem {{HTMLElement("fieldset")}}-Element ist es auch gängige Praxis, HTML-Titel (z.B. {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}) und Abschnittseinteilungen (z.B. {{htmlelement("section")}}) zu verwenden, um komplexe Formulare zu strukturieren.

Vor allem liegt es an Ihnen, einen komfortablen Codierungsstil zu finden, der zu zugänglichen, benutzbaren Formularen führt. Jeder separate Funktionsabschnitt sollte in einem separaten {{htmlelement("section")}}-Element enthalten sein, mit {{htmlelement("fieldset")}}-Elementen, um Optionsfelder zu enthalten.

### Aktives Lernen: Eine Formularstruktur erstellen

Lassen Sie uns diese Ideen in die Praxis umsetzen und ein etwas aufwendigeres Formular erstellen — ein Zahlungsformular. Dieses Formular wird eine Reihe von Kontrollen enthalten, die Sie möglicherweise noch nicht verstehen. Machen Sie sich darüber keine Sorgen; Sie werden in dem nächsten Artikel erfahren, wie sie funktionieren ([Grundlegende native Formularelemente](/de/docs/Learn/Forms/Basic_native_form_controls)). Für den Moment lesen Sie die Beschreibungen sorgfältig, während Sie den unten stehenden Anweisungen folgen, und beginnen Sie zu verstehen, welche Wrapper-Elemente wir verwenden, um das Formular zu strukturieren, und warum.

1. Beginnen Sie damit, eine lokale Kopie unserer [leeren Vorlagendatei](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) in einem neuen Verzeichnis auf Ihrem Computer zu erstellen.

2. Erstellen Sie dann Ihr Formular, indem Sie ein {{htmlelement("form")}}-Element hinzufügen:

   ```html-nolint
   <form>
   ```

3. Fügen Sie innerhalb des `<form>`-Elements eine Überschrift und einen Absatz hinzu, um die Benutzer darüber zu informieren, wie erforderliche Felder gekennzeichnet sind:

   ```html-nolint
   <h1>Payment form</h1>
   <p>
     Required fields are followed by
     <strong><span aria-label="required">*</span></strong>.
   </p>
   ```

4. Als nächstes fügen wir einen größeren Abschnitt von Code in das Formular unter unserem vorherigen Eintrag ein. Hier sehen Sie, dass wir die Kontaktinformationsfelder in ein separates {{htmlelement("section")}}-Element umgeben. Außerdem haben wir ein Set von drei Optionsfeldern, von denen wir jedes in seinem eigenen Listen-({{htmlelement("li")}})-Element platzieren. Wir haben auch zwei Standard-Text-{{htmlelement("input")}}s und ihre zugehörigen {{htmlelement("label")}}-Elemente, die jeweils in einem {{htmlelement("p")}} enthalten sind, und eine Passwort-Eingabe, um ein Passwort einzugeben. Fügen Sie diesen Code zu Ihrem Formular hinzu:

   ```html
   <section>
     <h2>Contact information</h2>
     <fieldset>
       <legend>Title</legend>
       <ul>
         <li>
           <label for="title_1">
             <input type="radio" id="title_1" name="title" value="A" />
             Ace
           </label>
         </li>
         <li>
           <label for="title_2">
             <input type="radio" id="title_2" name="title" value="K" />
             King
           </label>
         </li>
         <li>
           <label for="title_3">
             <input type="radio" id="title_3" name="title" value="Q" />
             Queen
           </label>
         </li>
       </ul>
     </fieldset>
     <p>
       <label for="name">
         <span>Name: </span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="text" id="name" name="username" required />
     </p>
     <p>
       <label for="mail">
         <span>Email: </span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="email" id="mail" name="user-mail" required />
     </p>
     <p>
       <label for="pwd">
         <span>Password: </span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="password" id="pwd" name="password" required />
     </p>
   </section>
   ```

5. Der zweite `<section>` unseres Formulars ist die Zahlungsinformation.
   Wir haben drei verschiedene Kontrollen zusammen mit ihren Labels, von denen jede in einem `<p>` enthalten ist.
   Die erste ist ein Dropdown-Menü ({{htmlelement("select")}}) zur Auswahl des Kreditkartentyps.
   Die zweite ist ein `<input>`-Element vom Typ `tel`, um eine Kreditkartennummer einzugeben; während wir den `number`-Typ hätten verwenden können, möchten wir die Spinner-Benutzeroberfläche für Nummern nicht.
   Das letzte ist ein `<input>`-Element vom Typ `text`, um das Ablaufdatum der Karte einzugeben; dies umfasst ein _placeholder_-Attribut, das das korrekte Format angibt, und ein _pattern_, das überprüft, ob das eingegebene Datum das korrekte Format hat.
   Diese neueren Eingabetypen werden in [Die HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types) wieder eingeführt.

   Geben Sie den folgenden Abschnitt unter dem vorherigen ein:

   ```html
   <section>
     <h2>Payment information</h2>
     <p>
       <label for="card">
         <span>Card type:</span>
       </label>
       <select id="card" name="user-card">
         <option value="visa">Visa</option>
         <option value="mc">Mastercard</option>
         <option value="amex">American Express</option>
       </select>
     </p>
     <p>
       <label for="number">
         <span>Card number:</span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input type="tel" id="number" name="card-number" required />
     </p>
     <p>
       <label for="expiration">
         <span>Expiration date:</span>
         <strong><span aria-label="required">*</span></strong>
       </label>
       <input
         type="text"
         id="expiration"
         name="expiration"
         required
         placeholder="MM/YY"
         pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
     </p>
   </section>
   ```

6. Der letzte Abschnitt, den wir hinzufügen werden, ist viel einfacher und enthält nur einen {{htmlelement("button")}} vom Typ `submit`, um die Formulardaten zu übermitteln. Fügen Sie dies jetzt am unteren Ende Ihres Formulars hinzu:

   ```html
   <section>
     <p>
       <button type="submit">Validate the payment</button>
     </p>
   </section>
   ```

7. Schließen Sie schließlich Ihr Formular, indem Sie das äußere {{htmlelement("form")}} schließende Tag hinzufügen:

   ```html
   </form>
   ```

   ```css hidden
   h1 {
     margin-top: 0;
   }

   ul {
     margin: 0;
     padding: 0;
     list-style: none;
   }

   form {
     margin: 0 auto;
     width: 400px;
     padding: 1em;
     border: 1px solid #ccc;
     border-radius: 1em;
   }

   div + div {
     margin-top: 1em;
   }

   label span {
     display: inline-block;
     text-align: right;
   }

   input,
   textarea {
     font: 1em sans-serif;
     width: 250px;
     box-sizing: border-box;
     border: 1px solid #999;
   }

   input[type="checkbox"],
   input[type="radio"] {
     width: auto;
     border: none;
   }

   input:focus,
   textarea:focus {
     border-color: #000;
   }

   textarea {
     vertical-align: top;
     height: 5em;
     resize: vertical;
   }

   fieldset {
     width: 250px;
     box-sizing: border-box;
     border: 1px solid #999;
   }

   button {
     margin: 20px 0 0 0;
   }

   label {
     display: inline-block;
   }

   p label {
     width: 100%;
   }
   ```

Wir haben dem unten fertiggestellten Formular einige zusätzliche CSS-Stile hinzugefügt. Wenn Sie Änderungen am Aussehen Ihres Formulars vornehmen möchten, können Sie Stile aus [dem Beispiel](/de/docs/Learn/Forms/How_to_structure_a_web_form/Example) kopieren oder [Webformulare gestalten](/de/docs/Learn/Forms/Styling_web_forms) besuchen.

{{EmbedLiveSample("active_learning_building_a_form_structure","100%",620)}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einen weiteren Test finden, um zu überprüfen, ob Sie diese Informationen gespeichert haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Formularstruktur](/de/docs/Learn/Forms/Test_your_skills:_Form_structure).

## Zusammenfassung

Sie haben nun alle Kenntnisse, die Sie benötigen, um Ihre Webformulare richtig zu strukturieren. Wir werden viele der hier eingeführten Funktionen in den nächsten Artikeln behandeln, wobei im nächsten Artikel näher auf die Verwendung aller verschiedenen Arten von Formularelementen eingegangen wird, die Sie verwenden möchten, um Informationen von Ihren Benutzern zu sammeln.

## Siehe auch

- [A List Apart: _Sensible Forms: A Form Usability Checklist_](https://alistapart.com/article/sensibleforms/)

{{PreviousMenuNext("Learn/Forms/Your_first_form", "Learn/Forms/Basic_native_form_controls", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zur Erstellung benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaften-Kompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
