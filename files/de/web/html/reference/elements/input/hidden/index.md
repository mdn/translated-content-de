---
title: '`<input type="hidden">` HTML-Attributwert'
short-title: <input type="hidden">
slug: Web/HTML/Reference/Elements/input/hidden
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}}-Elemente vom Typ **`hidden`** ermöglichen es Webentwicklern, Daten einzuschließen, die beim Absenden eines Formulars von Benutzern nicht gesehen oder geändert werden können. Zum Beispiel die ID des Inhalts, der derzeit bestellt oder bearbeitet wird, oder ein einzigartiges Sicherheitstoken. Verdeckte Eingaben sind auf der gerenderten Seite vollständig unsichtbar, und es gibt keine Möglichkeit, sie im Seiteninhalt sichtbar zu machen.

> [!NOTE]
> Die [`input`](/de/docs/Web/API/Element/input_event)- und [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse gelten nicht für diesen Eingabetyp. Verdeckte Eingaben können nicht einmal mit JavaScript fokussiert werden (z. B. `hiddenInput.focus()`).

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die die versteckten Daten enthält, die beim Absenden des Formulars an den Server übermittelt werden sollen. Diese können über die Benutzeroberfläche nicht bearbeitet oder eingesehen werden, obwohl Sie den Wert über die Entwicklerwerkzeuge des Browsers ändern könnten.

> [!WARNING]
> Auch wenn der Wert dem Benutzer im Seiteninhalt nicht angezeigt wird, ist er sichtbar und kann mit den Entwicklerwerkzeugen eines beliebigen Browsers oder der Funktion "Quellcode anzeigen" bearbeitet werden. Verlassen Sie sich nicht auf `hidden`-Eingaben als eine Form der Sicherheit.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `hidden`-Eingaben die folgenden Attribute.

### name

Dies ist eigentlich eines der allgemeinen Attribute, aber es hat eine besondere Bedeutung für versteckte Eingaben. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut bei versteckten Eingaben genauso wie bei jeder anderen Eingabe. Wenn das Formular jedoch abgesendet wird, wird eine versteckte Eingabe, deren `name`-Attribut auf `_charset_` gesetzt ist, automatisch mit dem Wert gemeldet, der auf die Zeichenkodierung gesetzt ist, die zur Übermittlung des Formulars verwendet wird.

## Verwendung von versteckten Eingaben

Wie oben erwähnt, können versteckte Eingaben überall dort verwendet werden, wo Sie Daten einschließen möchten, die der Benutzer nicht sehen oder bearbeiten kann, zusammen mit dem Formular, wenn es an den Server gesendet wird. Lassen Sie uns einige Beispiele betrachten, die die Verwendung verdeutlichen.

### Nachverfolgung bearbeiteter Inhalte

Eine der häufigsten Anwendungen für versteckte Eingaben ist das Nachverfolgen, welcher Datensatz in der Datenbank aktualisiert werden muss, wenn ein Bearbeitungsformular abgesendet wird. Ein typischer Workflow sieht folgendermaßen aus:

1. Der Benutzer entscheidet sich, einen Inhalt zu bearbeiten, über den er Kontrolle hat, zum Beispiel einen Blogbeitrag oder einen Produkteintrag. Er beginnt, indem er die Schaltfläche "Bearbeiten" drückt.
2. Der zu bearbeitende Inhalt wird aus der Datenbank entnommen und in ein HTML-Formular geladen, damit der Benutzer Änderungen vornehmen kann.
3. Nach dem Bearbeiten übermittelt der Benutzer das Formular, und die aktualisierten Daten werden zurück an den Server gesendet, um in der Datenbank aktualisiert zu werden.

Die Idee hierbei ist, dass während Schritt 2 die ID des aktualisierten Datensatzes in einem versteckten Eingabefeld aufbewahrt wird. Wenn das Formular in Schritt 3 abgesendet wird, wird die ID automatisch zusammen mit dem Datensatzinhalt zurück an den Server gesendet. Die ID ermöglicht es dem serverseitigen Teil der Site genau zu wissen, welcher Datensatz mit den eingesendeten Daten aktualisiert werden muss.

Ein vollständiges Beispiel dafür, wie dies aussehen könnte, finden Sie im Abschnitt [Beispiele](#beispiele) unten.

### Verbesserung der Website-Sicherheit

Verdeckte Eingaben werden auch verwendet, um Sicherheits-Token oder -geheimnisse zu speichern und zu übermitteln, um die Sicherheit der Website zu erhöhen. Die Grundidee ist, dass, wenn ein Benutzer ein sensibles Formular ausfüllt, zum Beispiel ein Formular auf seiner Banking-Website, um Geld auf ein anderes Konto zu überweisen, ihm ein Geheimnis zur Verfügung gestellt würde, das beweist, dass er derjenige ist, für den er sich ausgibt, und dass er das richtige Formular verwendet, um den Überweisungsauftrag abzusenden.

Dies würde einen böswilligen Benutzer davon abhalten, ein gefälschtes Formular zu erstellen, das vortäuscht, eine Bank zu sein, und das Formular nichtsahnenden Benutzern zuzusenden, um sie dazu zu bringen, Geld an den falschen Ort zu überweisen. Diese Art von Angriff wird als [Cross Site Request Forgery (CSRF)](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#cross-site_request_forgery_csrf) bezeichnet; praktisch jeder seriöse serverseitige Rahmen arbeitet mit versteckten Geheimnissen, um solche Angriffe zu verhindern.

> [!NOTE]
> Das Platzieren des Geheimnisses in einem versteckten Eingabefeld macht es nicht von Natur aus sicher. Die Zusammensetzung und Kodierung des Schlüssels würden dies bewirken. Der Wert der versteckten Eingabe besteht darin, dass sie das Geheimnis mit den Daten verknüpft und es automatisch einbindet, wenn das Formular an den Server gesendet wird. Sie müssen gut gestaltete Geheimnisse verwenden, um Ihre Website tatsächlich zu sichern.

## Validierung

Verdeckte Eingaben nehmen nicht an der Constraint-Validierung teil; sie haben keinen echten zu beschränkenden Wert.

## Beispiele

Lassen Sie uns betrachten, wie wir eine Version des oben beschriebenen Bearbeitungsformulars implementieren könnten (siehe [Nachverfolgung bearbeiteter Inhalte](#nachverfolgung_bearbeiteter_inhalte)), indem wir eine versteckte Eingabe verwenden, um die ID des bearbeiteten Datensatzes zu speichern.

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

Der Server würde den Wert der versteckten Eingabe mit der ID `postID` auf die ID des Beitrags in seiner Datenbank setzen, bevor er das Formular an den Browser des Benutzers sendet, und diese Information verwenden, wenn das Formular zurückgesendet wird, um zu wissen, welcher Datenbankeintrag mit den geänderten Informationen aktualisiert werden soll. Im Inhalt ist kein Skript erforderlich, um dies zu handhaben.

Die Ausgabe sieht so aus:

{{EmbedLiveSample('Examples', '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html) und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Beim Absenden sieht die an den Server gesendete Formulardaten ungefähr so aus:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Obwohl die versteckte Eingabe überhaupt nicht gesehen werden kann, werden ihre Daten dennoch übermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Wert der versteckten
        Daten darstellt, die Sie an den Server zurückübermitteln möchten.
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
      <td><strong>Methoden</strong></td>
      <td>Keine.</td>
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

- [Leitfaden zu HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die darauf basierende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle
