---
title: "<details>: Das Details-Disclosure-Element"
slug: Web/HTML/Element/details
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<details>`** [HTML](/de/docs/Web/HTML) Element erstellt ein Disclosure-Widget, bei dem Informationen nur sichtbar sind, wenn das Widget in einen "offenen" Zustand umgeschaltet wird. Eine Zusammenfassung oder Beschriftung muss mit dem {{HTMLElement("summary")}} Element bereitgestellt werden.

Ein Disclosure-Widget wird typischerweise auf dem Bildschirm mit einem kleinen Dreieck dargestellt, das sich dreht (oder verdreht), um den offenen/geschlossenen Status anzuzeigen, mit einem Etikett neben dem Dreieck. Der Inhalt des `<summary>` Elements wird als Etikett für das Disclosure-Widget verwendet. Der Inhalt des `<details>` bietet die [zugängliche Beschreibung](/de/docs/Glossary/accessible_description) für das `<summary>`.

{{EmbedInteractiveExample("pages/tabbed/details.html", "tabbed-shorter")}}

Ein `<details>` Widget kann in einem von zwei Zuständen sein. Der Standardzustand _geschlossen_ zeigt nur das Dreieck und das Etikett innerhalb von `<summary>` an (oder eine [Nutzeragent](/de/docs/Glossary/user_agent)-definierte Standardzeichenfolge, wenn kein `<summary>` vorhanden ist).

Wenn der Benutzer auf das Widget klickt oder es fokussiert und dann die Leertaste drückt, "dreht" es sich auf und offenbart seinen Inhalt. Der übliche Gebrauch eines Dreiecks, das sich dreht oder verdreht, um das Öffnen oder Schließen des Widgets darzustellen, ist der Grund, warum diese manchmal "twisty" genannt werden.

Sie können CSS verwenden, um das Disclosure-Widget zu stylen, und Sie können das Widget programmatisch öffnen und schließen, indem Sie sein [`open`](#open) Attribut setzen/entfernen. Leider gibt es derzeit keine integrierte Möglichkeit, den Übergang zwischen offen und geschlossen zu animieren.

Standardmäßig ist das Widget im geschlossenen Zustand nur so hoch, dass es das Disclosure-Dreieck und die Zusammenfassung anzeigt. Wenn es geöffnet ist, erweitert sich das Widget, um die im Inneren enthaltenen Details anzuzeigen.

Vollständig standardkonforme Implementierungen wenden automatisch das CSS `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}} Element an. Sie können dies nutzen, um sein Erscheinungsbild weiter anzupassen. Siehe [Anpassen des Disclosure-Widgets](#anpassung_des_disclosure-widgets) für weitere Details.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `open`

  - : Dieses boolesche Attribut gibt an, ob die Details – also der Inhalt des `<details>` Elements – derzeit sichtbar sind. Die Details werden angezeigt, wenn dieses Attribut vorhanden ist, oder ausgeblendet, wenn dieses Attribut fehlt. Standardmäßig ist dieses Attribut nicht vorhanden, was bedeutet, dass die Details nicht sichtbar sind.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details auszublenden. `open="false"` macht die Details sichtbar, da dieses Attribut ein boolesches Attribut ist.

- `name`

  - : Dieses Attribut ermöglicht es, mehrere `<details>` Elemente zu verbinden, wobei jeweils nur eines geöffnet sein kann. Dies ermöglicht Entwicklern, UI-Funktionen wie Akkordeons ohne Scripting einfach zu erstellen.

    Das `name` Attribut spezifiziert einen Gruppennamen – geben Sie mehreren `<details>` Elementen denselben `name` Wert, um sie zu gruppieren. Nur eines der gruppierten `<details>` Elemente kann gleichzeitig geöffnet sein – das Öffnen eines wird dazu führen, dass ein anderes geschlossen wird. Wenn mehreren gruppierten `<details>` Elementen das `open` Attribut gegeben wird, wird nur das erste in der Quellreihenfolge geöffnet dargestellt.

    > **Hinweis:** `<details>` Elemente müssen nicht aufeinander folgend im Quellcode sein, um Teil derselben Gruppe zu sein.

## Ereignisse

Zusätzlich zu den üblichen Ereignissen, die von HTML-Elementen unterstützt werden, unterstützt das `<details>` Element das [`toggle`](/de/docs/Web/API/HTMLDetailsElement/toggle_event) Ereignis, welches an das `<details>` Element gesendet wird, wann immer sich sein Status zwischen offen und geschlossen ändert. Es wird _nachdem_ der Status geändert wurde gesendet, obwohl wenn der Status mehrfach geändert wird, bevor der Browser das Ereignis senden kann, die Ereignisse konsolidiert werden, sodass nur eines gesendet wird.

Sie können einen Event-Listener für das `toggle` Ereignis verwenden, um zu erkennen, wann sich der Zustand des Widgets ändert:

```js
details.addEventListener("toggle", (event) => {
  if (details.open) {
    /* the element was toggled open */
  } else {
    /* the element was toggled closed */
  }
});
```

## Beispiele

### Ein einfaches Disclosure-Beispiel

Dieses Beispiel zeigt ein einfaches `<details>` Element mit einem `<summary>`.

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("A_simple_disclosure_example", 650, 150)}}

### Erstellen eines geöffneten Disclosure-Feldes

Um das `<details>` Feld im geöffneten Zustand zu starten, fügen Sie das boolesche `open` Attribut hinzu:

```html
<details open>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Creating_an_open_disclosure_box", 650, 150)}}

### Mehrere benannte Disclosure-Felder

Wir fügen mehrere `<details>` Felder ein, alle mit demselben Namen, sodass jeweils nur eines geöffnet sein kann:

```html
<details name="reqs">
  <summary>Graduation Requirements</summary>
  <p>
    Requires 40 credits, including a passing grade in health, geography,
    history, economics, and wood shop.
  </p>
</details>
<details name="reqs">
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
<details name="reqs">
  <summary>Job Requirements</summary>
  <p>
    Requires knowledge of HTML, CSS, JavaScript, accessibility, web performance,
    privacy, security, and internationalization, as well as a dislike of
    broccoli.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Multiple named disclosure boxes", 650, 150)}}

Versuchen Sie, alle Disclosure-Widgets zu öffnen. Wenn Sie eines öffnen, schließen alle anderen automatisch.

### Anpassung des Erscheinungsbildes

Nun wenden wir etwas CSS an, um das Erscheinungsbild des Disclosure-Felds zu individualisieren.

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details[open] > summary {
  background-color: #ccf;
}
```

Dieses CSS erzeugt ein Aussehen, das einer Registerkarten-Schnittstelle ähnelt, bei der das Klicken auf die Registerkarte sie öffnet, um ihren Inhalt zu enthüllen.

Der Selektor `details[open]` kann verwendet werden, um das Element zu stylen, welches geöffnet ist.

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Customizing_the_appearance", 650, 150)}}

### Anpassung des Disclosure-Widgets

Das Dreieck, das das Disclosure darstellt, kann angepasst werden, obwohl dies nicht breit unterstützt wird. Es gibt Unterschiede in der Browserunterstützung für diese Anpassung aufgrund experimenteller Implementierungen, als das Element standardisiert wurde, sodass wir für eine Weile mehrere Ansätze verwenden müssen.

Das {{HTMLElement("summary")}} Element unterstützt die {{cssxref("list-style")}} Kurzschreibweise und seine Langhandschreibweisen, wie {{cssxref("list-style-type")}}, um das Disclosure-Dreieck in das zu ändern, was Sie wünschen (normalerweise mit {{cssxref("list-style-image")}}). Zum Beispiel können wir das Symbol des Disclosure-Widgets entfernen, indem wir `list-style: none` setzen.

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
  list-style: none;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}
```

Dieses CSS erzeugt ein Aussehen, das einer Registerkarten-Schnittstelle ähnelt, bei der das Aktivieren der Registerkarte sie erweitert und öffnet, um ihren Inhalt zu enthüllen.

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Customizing_the_disclosure_widget", 650, 150)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >, Abschnittswurzel, interaktiver Inhalt, tastbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}} Element gefolgt von
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLDetailsElement`](/de/docs/Web/API/HTMLDetailsElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("summary")}}
