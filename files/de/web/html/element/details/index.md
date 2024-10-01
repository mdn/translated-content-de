---
title: "<details>: Das Details Ausklappelement"
slug: Web/HTML/Element/details
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<details>`** [HTML](/de/docs/Web/HTML) Element erstellt ein Ausklapp-Widget, bei dem Informationen nur sichtbar sind, wenn das Widget in den "geöffneten" Zustand umgeschaltet wird. Eine Zusammenfassung oder Beschriftung muss mit dem {{HTMLElement("summary")}}-Element bereitgestellt werden.

Ein Ausklapp-Widget wird typischerweise auf dem Bildschirm mit einem kleinen Dreieck angezeigt, das sich dreht (oder verdreht), um den offenen/geschlossenen Status anzuzeigen, mit einer Beschriftung neben dem Dreieck. Der Inhalt des `<summary>`-Elements wird als Beschriftung für das Ausklapp-Widget verwendet. Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

{{EmbedInteractiveExample("pages/tabbed/details.html", "tabbed-shorter")}}

Ein `<details>`-Widget kann in einem von zwei Zuständen sein. Der standardmäßige _geschlossene_ Zustand zeigt nur das Dreieck und die Beschriftung innerhalb von `<summary>` an (oder eine {{Glossary("user_agent", "Benutzeragent")}}-definierte Standardzeichenfolge, wenn kein `<summary>` vorhanden ist).

Wenn der Benutzer auf das Widget klickt oder den Fokus darauf legt und dann die Leertaste drückt, "verdreht" es sich und zeigt seinen Inhalt. Die übliche Verwendung eines sich drehenden oder verdrehenden Dreiecks zur Darstellung des Öffnens oder Schließens des Widgets ist der Grund, warum diese manchmal "Twisty" genannt werden.

Sie können CSS verwenden, um das Ausklapp-Widget zu stylen, und Sie können das Widget programmatisch öffnen und schließen, indem Sie das [`open`](#open)-Attribut setzen/entfernen. Leider gibt es derzeit keine eingebaute Möglichkeit, die Übergänge zwischen geöffnetem und geschlossenem Zustand zu animieren.

Standardmäßig ist das Widget im geschlossenen Zustand nur so hoch, dass das Ausklapp-Dreieck und die Zusammenfassung angezeigt werden. Wenn es geöffnet wird, erweitert es sich, um die darin enthaltenen Details anzuzeigen.

Vollständig standardkonforme Implementierungen wenden automatisch das CSS `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}}-Element an. Sie können dies nutzen, um das Erscheinungsbild weiter anzupassen. Weitere Details finden Sie unter [Anpassen des Ausklapp-Widgets](#anpassen_des_ausklapp-widgets).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `open`

  - : Dieses boolesche Attribut gibt an, ob die Details — das heißt, der Inhalt des `<details>`-Elements — derzeit sichtbar sind. Die Details werden angezeigt, wenn dieses Attribut existiert, oder ausgeblendet, wenn dieses Attribut fehlt. Standardmäßig fehlt dieses Attribut, was bedeutet, dass die Details nicht sichtbar sind.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details auszublenden. `open="false"` macht die Details sichtbar, da dieses Attribut boolesch ist.

- `name`

  - : Dieses Attribut ermöglicht es, mehrere `<details>`-Elemente miteinander zu verbinden, sodass jeweils nur eines geöffnet werden kann. Dies ermöglicht es Entwicklern, UI-Features wie Akkordeons einfach ohne Skripte zu erstellen.

    Das `name`-Attribut gibt einen Gruppennamen an — geben Sie mehreren `<details>`-Elementen denselben `name`-Wert, um sie zu gruppieren. Nur eines der gruppierten `<details>`-Elemente kann gleichzeitig geöffnet sein — das Öffnen eines schließt ein anderes. Wenn mehreren gruppierten `<details>`-Elementen das `open`-Attribut gegeben ist, wird nur das erste in der Quellreihenfolge als geöffnet angezeigt.

    > **Hinweis:** `<details>`-Elemente müssen nicht nebeneinander in der Quelle stehen, um Teil derselben Gruppe zu sein.

## Ereignisse

Zusätzlich zu den üblichen Ereignissen, die von HTML-Elementen unterstützt werden, unterstützt das `<details>`-Element das [`toggle`](/de/docs/Web/API/HTMLDetailsElement/toggle_event)-Ereignis, das an das `<details>`-Element gesendet wird, wann immer sich sein Zustand zwischen geöffnet und geschlossen ändert. Es wird _nach_ der Zustandsänderung gesendet, obwohl, wenn sich der Zustand mehrmals ändert, bevor der Browser das Ereignis senden kann, die Ereignisse zusammengefasst werden, sodass nur eines gesendet wird.

Sie können einen Ereignislistener für das `toggle`-Ereignis verwenden, um zu erkennen, wann das Widget den Zustand ändert:

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

### Ein einfaches Ausklappbeispiel

Dieses Beispiel zeigt ein einfaches `<details>`-Element mit einem `<summary>`.

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

### Erstellen einer geöffneten Ausklappbox

Um die `<details>`-Box im offenen Zustand zu starten, fügen Sie das boolesche `open`-Attribut hinzu:

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

### Mehrere benannte Ausklappboxen

Wir fügen mehrere `<details>`-Boxen hinzu, alle mit demselben Namen, sodass jeweils nur eine gleichzeitig geöffnet sein kann:

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

Versuchen Sie, alle Ausklapp-Widgets zu öffnen. Wenn Sie eines öffnen, schließen sich alle anderen automatisch.

### Anpassen des Erscheinungsbildes

Jetzt wenden wir etwas CSS an, um das Erscheinungsbild der Ausklappbox anzupassen.

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

Dieses CSS erstellt ein Erscheinungsbild, das einer Registerkartenoberfläche ähnelt, bei der durch Klicken auf die Registerkarte diese geöffnet wird, um ihren Inhalt anzuzeigen.

Der Selektor `details[open]` kann verwendet werden, um das Element zu stylen, das geöffnet ist.

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

### Anpassen des Ausklapp-Widgets

Das Ausklapp-Dreieck selbst kann angepasst werden, obwohl dies nicht so umfassend unterstützt wird. Es gibt Unterschiede darin, wie Browser diese Anpassung aufgrund experimenteller Implementierungen beim Standardisieren des Elements unterstützen, daher müssen wir für eine Weile mehrere Ansätze verwenden.

Das {{HTMLElement("summary")}}-Element unterstützt die {{cssxref("list-style")}}-Kurzschreibweise und seine Langformschreibweisen, wie {{cssxref("list-style-type")}}, um das Ausklapp-Dreieck in etwas anderes zu ändern (normalerweise mit {{cssxref("list-style-image")}}). Zum Beispiel können wir das Symbol des Ausklapp-Widgets entfernen, indem wir `list-style: none` setzen.

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

Dieses CSS erstellt ein Erscheinungsbild, das einer Registerkartenoberfläche ähnelt, bei der das Aktivieren der Registerkarte diese erweitert und öffnet, um ihren Inhalt anzuzeigen.

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
          >Fließender Inhalt</a
        >, Abschnittswurzel, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}}-Element gefolgt von
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließendem Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließenden Inhalt</a
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
