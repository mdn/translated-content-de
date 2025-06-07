---
title: <input type="hidden">
slug: Web/HTML/Reference/Elements/input/hidden
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

{{HTMLElement("input")}} -Elemente des Typs **`hidden`** ermöglichen es Webentwicklern, Daten einzuschließen, die beim Senden eines Formulars nicht von Benutzern gesehen oder geändert werden können. Zum Beispiel die ID des Inhalts, der gerade bestellt oder bearbeitet wird, oder ein einzigartiges Sicherheitstoken. Versteckte Eingaben sind in der gerenderten Seite vollständig unsichtbar, und es gibt keine Möglichkeit, sie im Seiteninhalt sichtbar zu machen.

> [!NOTE]
> Die [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignisse gelten nicht für diesen Eingabetyp. Versteckte Eingaben können auch nicht mit JavaScript fokussiert werden (z.B. `hiddenInput.focus()`).

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) -Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette mit den versteckten Daten, die Sie einschließen möchten, wenn das Formular an den Server gesendet wird. Dieser Wert kann vom Benutzer nicht über die Benutzeroberfläche bearbeitet oder gesehen werden, obwohl Sie den Wert über Entwicklerwerkzeuge des Browsers bearbeiten könnten.

> [!WARNING]
> Auch wenn der Wert dem Benutzer nicht im Seiteninhalt angezeigt wird, ist er sichtbar und kann mit den Entwicklerwerkzeugen oder der Funktion "Quelltext anzeigen" eines Browsers bearbeitet werden. Sie sollten sich nicht auf `hidden`-Eingaben als eine Form der Sicherheit verlassen.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `hidden` Eingaben die folgenden Attribute.

### name

Dies ist eigentlich eines der gemeinsamen Attribute, hat jedoch eine spezielle Bedeutung für versteckte Eingaben. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut bei versteckten Eingaben, genau wie bei jeder anderen Eingabe. Wenn das Formular jedoch gesendet wird, wird eine versteckte Eingabe, deren `name` auf `_charset_` gesetzt ist, automatisch mit dem Wert der zur Übermittlung des Formulars verwendeten Zeichenkodierung gemeldet.

## Verwendung von versteckten Eingaben

Wie oben erwähnt, können versteckte Eingaben überall verwendet werden, wo Sie Daten einschließen möchten, die der Benutzer nicht sehen oder bearbeiten kann, zusammen mit dem Formular, wenn es an den Server gesendet wird. Schauen wir uns einige Beispiele an, die ihre Verwendung veranschaulichen.

### Verfolgung bearbeiteter Inhalte

Eine der häufigsten Anwendungen für versteckte Eingaben ist die Verfolgung, welcher Datenbankeintrag aktualisiert werden muss, wenn ein Bearbeitungsformular gesendet wird. Ein typischer Arbeitsablauf sieht etwa so aus:

1. Der Benutzer entscheidet sich, Inhalte zu bearbeiten, über die er Kontrolle hat, wie einen Blog-Eintrag oder einen Produkteintrag. Er beginnt, indem er die Schaltfläche zum Bearbeiten drückt.
2. Der zu bearbeitende Inhalt wird aus der Datenbank entnommen und in ein HTML-Formular geladen, damit der Benutzer Änderungen vornehmen kann.
3. Nach der Bearbeitung sendet der Benutzer das Formular, und die aktualisierten Daten werden zurück an den Server gesendet, um in der Datenbank aktualisiert zu werden.

Die Idee hierbei ist, dass während Schritt 2 die ID des aktualisierten Eintrags in einer versteckten Eingabe aufbewahrt wird. Wenn das Formular in Schritt 3 übermittelt wird, wird die ID automatisch zusammen mit dem Inhalt des Eintrags an den Server zurückgesendet. Die ID zeigt der serverseitigen Komponente der Website genau, welcher Eintrag mit den übermittelten Daten aktualisiert werden muss.

Ein vollständiges Beispiel, wie dies aussehen könnte, finden Sie im Abschnitt [Beispiele](#beispiele) unten.

### Verbesserung der Website-Sicherheit

Versteckte Eingaben werden auch verwendet, um Sicherheitstoken oder _Geheimnisse_ zu speichern und zu übermitteln, um die Sicherheit einer Website zu verbessern. Die grundlegende Idee ist, dass wenn ein Benutzer ein sensibles Formular ausfüllt, wie z.B. ein Formular auf seiner Bank-Website, um Geld auf ein anderes Konto zu überweisen, das Geheimnis, das ihm zur Verfügung gestellt wird, beweist, dass er tatsächlich der ist, der er vorgibt zu sein, und dass er das richtige Formular verwendet, um die Überweisungsanfrage einzureichen.

Dies würde einen böswilligen Benutzer davon abhalten, ein gefälschtes Formular zu erstellen, das vorgibt, eine Bank zu sein, und das Formular an ahnungslose Benutzer zu senden, um sie zu täuschen, damit sie Geld an den falschen Ort überweisen. Diese Art von Angriff wird als [Cross Site Request Forgery (CSRF)](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#cross-site_request_forgery_csrf) bezeichnet; praktisch jedes seriöse serverseitige Framework verwendet versteckte Geheimnisse, um solche Angriffe zu verhindern.

> [!NOTE]
> Das Platzieren des Geheimnisses in einer versteckten Eingabe macht es nicht von Natur aus sicher. Die Zusammensetzung und Kodierung des Schlüssels würden das tun. Der Wert der versteckten Eingabe besteht darin, das Geheimnis mit den Daten zu verknüpfen und es automatisch einzubeziehen, wenn das Formular an den Server gesendet wird. Sie müssen gut entworfene Geheimnisse verwenden, um Ihre Website tatsächlich zu sichern.

## Validierung

Versteckte Eingaben nehmen nicht an Constraint-Validierungen teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Schauen wir uns an, wie wir eine Version des zuvor beschriebenen Bearbeitungsformulars (siehe [Verfolgung bearbeiteter Inhalte](#verfolgung_bearbeiteter_inhalte)) implementieren könnten, indem wir eine versteckte Eingabe verwenden, um die ID des bearbeiteten Eintrags zu speichern.

Das HTML des Bearbeitungsformulars könnte ungefähr so aussehen:

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

Lassen Sie uns auch etwas CSS hinzufügen:

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

Der Server würde den Wert der versteckten Eingabe mit der ID `postID` auf die ID des Beitrags in seiner Datenbank einstellen, bevor er das Formular an den Browser des Benutzers sendet, und diese Informationen verwenden, wenn das Formular zurückgesendet wird, um zu wissen, welcher Datenbankeintrag mit den geänderten Informationen aktualisiert werden soll. Es ist kein Skripting im Inhalt erforderlich, um dies zu handhaben.

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> Sie können das Beispiel auch auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html), und auch [laufen sehen](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Wenn es gesendet wird, sieht die an den Server gesendete Formulardaten etwa so aus:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Auch wenn die versteckte Eingabe überhaupt nicht sichtbar ist, werden ihre Daten dennoch übermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Wert der versteckten
        Daten darstellt, die Sie an den Server senden möchten.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML Forms Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert.
