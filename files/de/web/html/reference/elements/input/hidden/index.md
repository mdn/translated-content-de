---
title: '`<input type="hidden">` HTML-Attributwert'
short-title: <input type="hidden">
slug: Web/HTML/Reference/Elements/input/hidden
l10n:
  sourceCommit: 659af2b5da3a3bf4064e75c3e4b7624386bec54b
---

{{HTMLElement("input")}}-Elemente vom Typ **`hidden`** ermöglichen es Webentwicklern, Daten in einem Formular einzufügen, die für Benutzer nicht sichtbar sind, wenn ein Formular abgesendet wird. Zum Beispiel die ID des Inhalts, der gerade bestellt oder bearbeitet wird, oder ein einzigartiges Sicherheitstoken. Versteckte Eingaben sind vollständig unsichtbar auf der gerenderten Seite, werden jedoch wie jede andere Formulareingabe gesendet. Obwohl die Daten nicht in den gerenderten Inhalten angezeigt werden, sind sie im HTML-Ausgang zugänglich und können von Benutzern mit Werkzeugen wie den [Entwicklerwerkzeugen des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) bearbeitet werden.

> [!NOTE]
> Die [`input`](/de/docs/Web/API/Element/input_event)- und [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse gelten nicht für diesen Eingabetyp. Verborgene Eingaben können nicht fokussiert werden, auch nicht mittels JavaScript (z. B. `hiddenInput.focus()`).

## Wert

Das `value`-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der die versteckten Daten enthält, die Sie beim Absenden des Formulars an den Server einfügen möchten. Dieser Wert wird dem Benutzer nicht über die Benutzeroberfläche präsentiert.

> [!WARNING]
> Obwohl der Wert dem Benutzer im Seiteninhalt nicht angezeigt wird, ist er sichtbar und kann mithilfe der Entwicklerwerkzeuge oder der "Quelltexte anzeigen"-Funktionalität eines Browsers bearbeitet werden. Verlassen Sie sich nicht auf `hidden`-Eingaben als Sicherheitsmaßnahme.

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen aller {{HTMLElement("input")}}-Elemente bieten `hidden`-Eingaben die folgenden Attribute.

### name

Dies ist tatsächlich eines der allgemeinen Attribute, aber es hat eine spezielle Bedeutung für versteckte Eingaben. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut bei versteckten Eingaben genauso wie bei jeder anderen Eingabe. Wenn jedoch das Formular abgesendet wird, wird eine versteckte Eingabe, deren `name` auf `_charset_` gesetzt ist, automatisch mit dem Wert des Zeichensatzes berichtet, der zum Absenden des Formulars verwendet wurde.

## Verwendung versteckter Eingaben

Wie oben erwähnt, können versteckte Eingaben überall verwendet werden, wo Sie Daten einfügen möchten, die der Benutzer nicht sehen kann, zusammen mit dem Formular, wenn es an den Server gesendet wird. Schauen wir uns einige Beispiele an, die seine Verwendung veranschaulichen.

### Verfolgung bearbeiteter Inhalte

Eine der häufigsten Anwendungen für versteckte Eingaben ist die Verfolgung, welcher Datenbankeintrag bei Einreichung eines Bearbeitungsformulars aktualisiert werden muss. Ein typischer Arbeitsablauf sieht so aus:

1. Der Benutzer entscheidet sich, Inhalte zu bearbeiten, über die er die Kontrolle hat, wie einen Blogpost oder einen Produkteintrag. Er beginnt, indem er den Bearbeiten-Button drückt.
2. Der zu bearbeitende Inhalt wird aus der Datenbank entnommen und in ein HTML-Formular geladen, damit der Benutzer Änderungen vornehmen kann.
3. Nach der Bearbeitung sendet der Benutzer das Formular ab und die aktualisierten Daten werden zurück an den Server gesendet, um in der Datenbank aktualisiert zu werden.

Die Idee hierbei ist, dass während Schritt 2 die ID des zu bearbeitenden Eintrags in einer versteckten Eingabe gehalten wird. Wenn das Formular in Schritt 3 gesendet wird, wird die ID automatisch zusammen mit dem Inhalt des Eintrags an den Server gesendet. Die ID teilt der serverseitigen Komponente der Website mit, welcher Eintrag mit den übermittelten Daten aktualisiert werden soll.

Ein vollständiges Beispiel, wie dies aussehen könnte, finden Sie im Abschnitt [Beispiele](#beispiele) unten.

### Verbesserung der Sicherheit der Website

Eine häufige Verwendung von versteckten Eingabefeldern besteht darin, Cross-Site Request Forgery (CSRF)-Tokens zu speichern, die Websites vor [CSRF-Angriffen](/de/docs/Web/Security/Attacks/CSRF) schützen.

> [!NOTE]
> In einer versteckten Eingabe platzierte Daten sind nicht von Natur aus gesichert. Ihr Wert ist für den Endbenutzer weiterhin sichtbar. Sie müssen gut gestaltete Geheimnisse verwenden, um Ihre Website tatsächlich zu sichern.

## Validierung

Versteckte Eingaben nehmen nicht an der Zwangsvalidierung teil; sie haben keinen realen Wert, der eingeschränkt werden kann.

## Beispiele

Schauen wir uns an, wie wir eine Version des zuvor beschriebenen Bearbeitungsformulars umsetzen könnten (siehe [Verfolgung bearbeiteter Inhalte](#verfolgung_bearbeiteter_inhalte)), wobei wir eine versteckte Eingabe verwenden, um die ID des bearbeiteten Eintrags zu merken.

Das HTML des Bearbeitungsformulars könnte etwa so aussehen:

```html
<form>
  <div>
    <label for="title">Post title:</label>
    <input type="text" id="title" name="title" value="My excellent blog post" />
  </div>
  <div>
    <label for="content">Post content:</label>
    <textarea id="content" name="content" cols="60" rows="5">
This is the content of my excellent blog post. I hope you enjoy it!
    </textarea>
  </div>
  <div>
    <button type="submit">Update post</button>
  </div>
  <input type="hidden" id="postId" name="postId" value="34657" />
</form>
```

Fügen wir auch etwas CSS hinzu:

```css
html {
  font-family: sans-serif;
}

form {
  width: 500px;
}

div {
  display: flex;
  margin-bottom: 10px;
}

label {
  flex: 2;
  line-height: 2;
  text-align: right;
  padding-right: 20px;
}

input,
textarea {
  flex: 7;
  font-family: sans-serif;
  font-size: 1.1rem;
  padding: 5px;
}

textarea {
  height: 60px;
}
```

Der Server würde den Wert der versteckten Eingabe mit der ID `postID` auf die ID des Artikels in seiner Datenbank setzen, bevor das Formular an den Browser des Benutzers gesendet wird, und würde diese Information verwenden, wenn das Formular zurückgesendet wird, um zu wissen, welcher Datenbankeintrag mit den geänderten Informationen aktualisiert werden soll. Es ist kein Skripting im Inhalt erforderlich, um dies zu handhaben.

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> Sie finden das Beispiel auch auf GitHub (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html) und auch [live ansehen](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Wenn das Formular abgesendet wird, sieht das an den Server gesendete Formular möglicherweise so aus:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Auch wenn die versteckte Eingabe überhaupt nicht gesehen werden kann, werden ihre Daten dennoch übermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Wert der versteckten Daten repräsentiert, die Sie an den Server übermitteln möchten.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a></td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formular-Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert
