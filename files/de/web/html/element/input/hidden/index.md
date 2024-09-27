---
title: <input type="hidden">
slug: Web/HTML/Element/input/hidden
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`hidden`** ermöglichen es Webentwicklern, Daten einzuschließen, die bei der Übermittlung eines Formulars nicht von Benutzern gesehen oder bearbeitet werden können. Zum Beispiel die ID des Inhalts, der gerade bestellt oder bearbeitet wird, oder ein eindeutiges Sicherheitstoken. Versteckte Eingaben sind auf der gerenderten Seite vollständig unsichtbar und es gibt keine Möglichkeit, sie im Inhalt der Seite sichtbar zu machen.

> [!NOTE]
> Die [`input`](/de/docs/Web/API/Element/input_event)- und [`change`](/de/docs/Web/API/HTMLElement/change_event)-Events gelten nicht für diesen Eingabetyp. Versteckte Eingaben können selbst mit JavaScript nicht fokussiert werden (z.B. `hiddenInput.focus()`).

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Element/input#value) des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die die versteckten Daten enthält, die Sie einschließen möchten, wenn das Formular an den Server gesendet wird. Dies kann speziell nicht über die Benutzeroberfläche bearbeitet oder gesehen werden, obwohl Sie den Wert über die Entwicklerwerkzeuge des Browsers bearbeiten könnten.

> [!WARNING]
> Obwohl der Wert dem Benutzer im Seiteninhalt nicht angezeigt wird, ist er über die Entwicklertools eines Browsers oder die Funktion "Seitenquelltext anzeigen" sichtbar und kann bearbeitet werden. Verlassen Sie sich nicht auf `hidden`-Eingaben als Sicherheitsform.

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `hidden`-Eingaben die folgenden Attribute.

### name

Dies ist tatsächlich eines der allgemeinen Attribute, hat aber eine besondere Bedeutung für versteckte Eingaben. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut bei versteckten Eingaben genauso wie bei jeder anderen Eingabe. Wenn jedoch das Formular gesendet wird, wird eine versteckte Eingabe, deren `name` auf `_charset_` gesetzt ist, automatisch mit dem Wert des Zeichensatzes gemeldet, der verwendet wird, um das Formular zu senden.

## Verwendung von versteckten Eingaben

Wie oben erwähnt, können versteckte Eingaben überall verwendet werden, wo Sie Daten einschließen möchten, die der Benutzer nicht sehen oder bearbeiten kann, zusammen mit dem Formular, wenn es an den Server gesendet wird. Lassen Sie uns einige Beispiele betrachten, die seine Verwendung veranschaulichen.

### Nachverfolgung bearbeiteter Inhalte

Eine der häufigsten Anwendungen für versteckte Eingaben besteht darin, im Auge zu behalten, welcher Datenbankeintrag aktualisiert werden muss, wenn ein Bearbeitungsformular gesendet wird. Ein typischer Workflow sieht so aus:

1. Der Benutzer entscheidet sich, einen Inhalt zu bearbeiten, über den er Kontrolle hat, wie z.B. einen Blog-Eintrag oder einen Produkteintrag. Er beginnt mit dem Drücken der Bearbeitungsschaltfläche.
2. Der Inhalt, der bearbeitet werden soll, wird aus der Datenbank entnommen und in ein HTML-Formular geladen, damit der Benutzer Änderungen vornehmen kann.
3. Nach der Bearbeitung sendet der Benutzer das Formular und die aktualisierten Daten werden zurück an den Server geschickt, um in der Datenbank aktualisiert zu werden.

Die Idee hier ist, dass während Schritt 2, die ID des zu aktualisierenden Eintrags in einer versteckten Eingabe gehalten wird. Wenn das Formular in Schritt 3 gesendet wird, wird die ID automatisch zusammen mit dem Inhalt des Eintrags zurück an den Server gesendet. Die ID lässt die serverseitige Komponente der Website genau wissen, welcher Eintrag mit den gesendeten Daten aktualisiert werden muss.

Ein vollständiges Beispiel, wie dies aussehen könnte, finden Sie im Abschnitt [Beispiele](#beispiele) unten.

### Verbesserung der Website-Sicherheit

Versteckte Eingaben werden auch verwendet, um Sicherheitstoken oder _Geheimnisse_ zu speichern und zu übermitteln, um die Sicherheit der Website zu verbessern. Der grundlegende Gedanke ist, dass, wenn ein Benutzer ein sensibles Formular ausfüllt, wie z.B. ein Formular auf seiner Banking-Website, um Geld auf ein anderes Konto zu überweisen, das Geheimnis ihm beweisen würde, dass er die Person ist, für die er sich ausgibt, und dass er das richtige Formular verwendet, um die Überweisungsanfrage zu senden.

Dies würde einen böswilligen Benutzer davon abhalten, ein gefälschtes Formular zu erstellen, das vorgibt, eine Bank zu sein, und es ahnungslosen Benutzern per E-Mail zu schicken, um sie dazu zu bringen, Geld an den falschen Ort zu überweisen. Diese Art von Angriff wird als [Cross Site Request Forgery (CSRF)](/de/docs/Learn/Server-side/First_steps/Website_security#cross-site_request_forgery_csrf) bezeichnet; praktisch jedes seriöse serverseitige Framework verwendet versteckte Geheimnisse, um solche Angriffe zu verhindern.

> [!NOTE]
> Das Platzieren des Geheimnisses in einer versteckten Eingabe macht es nicht von Natur aus sicher. Die Zusammensetzung und Kodierung des Schlüssels würden dies tun. Der Wert der versteckten Eingabe besteht darin, dass er das Geheimnis mit den Daten assoziiert hält und es automatisch einschließt, wenn das Formular an den Server gesendet wird. Sie müssen gut gestaltete Geheimnisse verwenden, um Ihre Website tatsächlich zu sichern.

## Validierung

Versteckte Eingaben nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Betrachten wir, wie wir eine einfache Version des zuvor beschriebenen Bearbeitungsformulars implementieren könnten (siehe [Nachverfolgung bearbeiteter Inhalte](#nachverfolgung_bearbeiteter_inhalte)), indem wir eine versteckte Eingabe verwenden, um die ID des bearbeiteten Eintrags zu speichern.

Das HTML des Bearbeitungsformulars könnte so aussehen:

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

Fügen wir auch ein einfaches CSS hinzu:

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

Der Server würde den Wert der versteckten Eingabe mit der ID `postID` auf die ID des Eintrags in seiner Datenbank setzen, bevor das Formular an den Browser des Benutzers gesendet wird, und diese Information verwenden, wenn das Formular zurückgesendet wird, um zu wissen, welcher Datenbankeintrag mit den geänderten Informationen zu aktualisieren ist. Kein Skripting ist im Inhalt erforderlich, um dies zu handhaben.

Das Ausgabeergebnis sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> Sie können das Beispiel auch auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html) und [siehe es auch live laufen](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Wenn es gesendet wird, sehen die an den Server gesendeten Formulardaten ungefähr so aus:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Obwohl die versteckte Eingabe überhaupt nicht gesehen werden kann, werden ihre Daten dennoch übermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Wert der versteckten
        Daten darstellt, die Sie an den Server übermitteln möchten.
      </td>
    </tr>
    <tr>
      <td><strong>Veranstaltungen</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a></td>
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
      <td><strong>Methoden</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare Leitfaden](/de/docs/Learn/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert.
