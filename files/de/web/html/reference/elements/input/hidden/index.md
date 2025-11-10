---
title: <input type="hidden">
slug: Web/HTML/Reference/Elements/input/hidden
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente vom Typ **`hidden`** ermöglichen es Webentwicklern, Daten einzuschließen, die beim Absenden eines Formulars nicht von den Benutzern gesehen oder geändert werden können. Zum Beispiel die ID des Inhalts, der gerade bestellt oder bearbeitet wird, oder ein einzigartiges Sicherheitstoken. Versteckte Eingaben sind auf der gerenderten Seite völlig unsichtbar, und es gibt keine Möglichkeit, sie im Seiteninhalt sichtbar zu machen.

> [!NOTE]
> Die Ereignisse [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event) gelten nicht für diesen Eingabetyp. Versteckte Eingaben können nicht fokussiert werden, selbst nicht mit JavaScript (z.B. `hiddenInput.focus()`).

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der die versteckten Daten enthält, die Sie beim Absenden des Formulars zum Server einschließen möchten. Diese können über die Benutzeroberfläche weder bearbeitet noch gesehen werden, obwohl Sie den Wert über die Entwicklerwerkzeuge des Browsers bearbeiten könnten.

> [!WARNING]
> Obwohl der Wert nicht für den Benutzer im Seiteninhalt angezeigt wird, ist er sichtbar und kann mit den Entwicklerwerkzeugen oder der „Seitenquelltext anzeigen“-Funktionalität eines jeden Browsers bearbeitet werden. Verlassen Sie sich nicht auf `hidden` Eingaben als eine Form der Sicherheit.

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen aller {{HTMLElement("input")}}-Elemente bieten `hidden` Eingaben die folgenden Attribute.

### name

Dies ist eigentlich eines der gemeinsamen Attribute, hat aber eine spezielle Bedeutung für versteckte Eingaben. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut bei versteckten Eingaben genauso wie bei jeder anderen Eingabe. Wenn das Formular jedoch abgesendet wird, wird eine versteckte Eingabe, deren `name` auf `_charset_` gesetzt ist, automatisch mit dem für die Übermittlung des Formulars verwendeten Zeichensatz gemeldet.

## Verwendung von versteckten Eingaben

Wie oben erwähnt, können versteckte Eingaben überall dort verwendet werden, wo Sie Daten einfügen möchten, die der Benutzer nicht sehen oder bearbeiten kann, wenn das Formular zum Server gesendet wird. Schauen wir uns einige Beispiele an, die ihre Verwendung veranschaulichen.

### Verfolgung bearbeiteter Inhalte

Eine der häufigsten Anwendungen für versteckte Eingaben besteht darin, festzuhalten, welcher Datenbankeintrag aktualisiert werden muss, wenn ein Bearbeitungsformular gesendet wird. Ein typischer Workflow sieht so aus:

1. Der Benutzer beschließt, einige Inhalte zu bearbeiten, über die er die Kontrolle hat, wie z.B. einen Blogbeitrag oder einen Produkteintrag. Er beginnt, indem er auf die Schaltfläche "Bearbeiten" drückt.
2. Der zu bearbeitende Inhalt wird aus der Datenbank entnommen und in ein HTML-Formular geladen, damit der Benutzer Änderungen vornehmen kann.
3. Nach der Bearbeitung sendet der Benutzer das Formular ab, und die aktualisierten Daten werden zurück an den Server gesendet, um in der Datenbank aktualisiert zu werden.

Die Idee hierbei ist, dass während Schritt 2 die ID des aktualisierten Eintrags in einer versteckten Eingabe aufbewahrt wird. Wenn das Formular in Schritt 3 gesendet wird, wird die ID automatisch zusammen mit dem Inhalt des Eintrags an den Server gesendet. Die ID lässt die serverseitige Komponente der Website genau erkennen, welcher Eintrag mit den übermittelten Daten aktualisiert werden muss.

Ein vollständiges Beispiel, wie dies aussehen könnte, finden Sie im Abschnitt [Beispiele](#beispiele) unten.

### Verbesserung der Website-Sicherheit

Versteckte Eingaben werden auch verwendet, um Sicherheitstoken oder _Geheimnisse_ zu speichern und zu übermitteln, um die Sicherheit einer Website zu verbessern. Die Grundidee ist, dass, wenn ein Benutzer ein sensibles Formular ausfüllt, wie ein Formular auf einer Bank-Website, um Geld auf ein anderes Konto zu überweisen, das Geheimnis, das ihm zur Verfügung gestellt wird, beweisen würde, dass er derjenige ist, für den er sich ausgibt, und dass er das richtige Formular verwendet, um die Überweisungsanforderung zu senden.

Dies würde einen böswilligen Benutzer daran hindern, ein gefälschtes Formular zu erstellen, das vorgibt, eine Bank zu sein, und das Formular an ahnungslose Benutzer zu senden, um sie dazu zu bringen, Geld an den falschen Ort zu überweisen. Diese Art von Angriff wird als [Cross Site Request Forgery (CSRF)](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#cross-site_request_forgery_csrf) bezeichnet; praktisch jedes seriöse serverseitige Framework verwendet versteckte Geheimnisse, um solche Angriffe zu verhindern.

> [!NOTE]
> Das Platzieren des Geheimnisses in einer versteckten Eingabe macht es nicht von Natur aus sicher. Die Zusammensetzung und Kodierung des Schlüssels würde das bewirken. Der Wert der versteckten Eingabe besteht darin, das Geheimnis mit den Daten zu verknüpfen und es automatisch einzuschließen, wenn das Formular an den Server gesendet wird. Sie müssen gut gestaltete Geheimnisse verwenden, um Ihre Website tatsächlich zu sichern.

## Validierung

Versteckte Eingaben nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Schauen wir uns an, wie wir eine Version des zuvor beschriebenen Bearbeitungsformulars implementieren könnten (siehe [Verfolgung bearbeiteter Inhalte](#verfolgung_bearbeiteter_inhalte)), indem wir eine versteckte Eingabe verwenden, um uns die ID des bearbeiteten Eintrags zu merken.

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

Der Server würde den Wert der versteckten Eingabe mit der ID `postID` auf die ID des Beitrags in seiner Datenbank setzen, bevor das Formular an den Browser des Benutzers gesendet wird, und würde diese Informationen verwenden, wenn das Formular zurückgesendet wird, um zu wissen, welchen Datenbankeintrag mit geänderten Informationen aktualisiert werden soll. Es ist kein Skripting zum Umgang mit diesem Inhalt erforderlich.

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> Sie können das Beispiel auch auf GitHub finden (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html) an und [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html) in Aktion).

Beim Absenden wird die Formulardaten wie folgt an den Server gesendet:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Auch wenn die versteckte Eingabe überhaupt nicht zu sehen ist, wird ihre Daten dennoch gesendet.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Wert der versteckten
        Daten darstellt, die Sie an den Server senden möchten.
      </td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
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

- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, auf der es basiert.
