---
title: "<details>: Das Details-Disclosure-Element"
slug: Web/HTML/Element/details
l10n:
  sourceCommit: a62600788f390d326859cfbf6171013a3f351690
---

{{HTMLSidebar}}

Das **`<details>`** [HTML](/de/docs/Web/HTML) Element erstellt ein Disclosure-Widget, bei dem Informationen nur sichtbar sind, wenn das Widget in einen "offenen" Zustand geschaltet wird. Eine Zusammenfassung oder Beschriftung muss mit dem {{HTMLElement("summary")}} Element bereitgestellt werden.

Ein Disclosure-Widget wird normalerweise auf dem Bildschirm mit einem kleinen Dreieck dargestellt, das sich dreht (oder verdreht), um den geöffneten/geschlossenen Status anzuzeigen, mit einer Beschriftung neben dem Dreieck. Der Inhalt des `<summary>` Elements wird als Beschriftung für das Disclosure-Widget verwendet. Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

{{EmbedInteractiveExample("pages/tabbed/details.html", "tabbed-shorter")}}

Ein `<details>` Widget kann sich in einem von zwei Zuständen befinden. Der Standardzustand _geschlossen_ zeigt nur das Dreieck und die Beschriftung innerhalb von `<summary>` an (oder eine vom {{Glossary("user_agent", "Benutzeragenten")}} festgelegte Standardzeichenfolge, falls kein `<summary>` vorhanden ist).

Wenn der Benutzer auf das Widget klickt oder es fokussiert und dann die Leertaste drückt, wird es "aufgedreht" und der Inhalt wird sichtbar. Die übliche Verwendung eines Dreiecks, das sich dreht oder verdreht, um das Öffnen oder Schließen des Widgets darzustellen, erklärt, warum diese manchmal "Twisty" genannt werden.

Sie können CSS verwenden, um das Disclosure-Widget zu gestalten, und Sie können das Widget programmatisch öffnen und schließen, indem Sie das [`open`](#open) Attribut setzen/entfernen. Leider gibt es derzeit keine integrierte Möglichkeit, den Übergang zwischen offenem und geschlossenem Zustand zu animieren.

Im geschlossenen Zustand ist das Widget standardmäßig nur hoch genug, um das Disclosure-Dreieck und die Zusammenfassung anzuzeigen. Im offenen Zustand wird es erweitert, um die darin enthaltenen Details anzuzeigen.

Vollständig standardkonforme Implementierungen wenden automatisch das CSS `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}} Element an. Sie können dies verwenden, um das Erscheinungsbild weiter anzupassen. Weitere Details finden Sie unter [Anpassen des Disclosure-Widgets](#anpassung_des_disclosure-widgets).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `open`

  - : Dieses Boolean-Attribut gibt an, ob die Details – also der Inhalt des `<details>` Elements – derzeit sichtbar sind. Die Details werden angezeigt, wenn dieses Attribut vorhanden ist, oder ausgeblendet, wenn dieses Attribut fehlt. Standardmäßig fehlt dieses Attribut, was bedeutet, dass die Details nicht sichtbar sind.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details auszublenden. `open="false"` macht die Details sichtbar, da dieses Attribut ein Boolean ist.

- `name`

  - : Dieses Attribut ermöglicht die Verbindung mehrerer `<details>` Elemente, wobei jeweils nur eines geöffnet wird. Dies ermöglicht es Entwicklern, leicht UI-Funktionen wie Akkordeons ohne Skripte zu erstellen.

    Das `name` Attribut gibt einen Gruppennamen an – geben Sie mehreren `<details>` Elementen den gleichen `name` Wert, um sie zu gruppieren. Nur eines der gruppierten `<details>` Elemente kann gleichzeitig geöffnet sein – das Öffnen eines schließt das andere. Wenn mehreren gruppierten `<details>` Elementen das `open` Attribut gegeben wird, wird nur das erste im Quellcode geöffnete angezeigt.

    > **Hinweis:** `<details>` Elemente müssen nicht nebeneinander im Quellcode sein, um Teil derselben Gruppe zu sein.

## Ereignisse

Zusätzlich zu den üblichen Ereignissen, die von HTML-Elementen unterstützt werden, unterstützt das `<details>` Element das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis, das an das `<details>` Element gesendet wird, wann immer sich sein Zustand zwischen offen und geschlossen ändert. Es wird _nach_ dem Ändern des Zustands gesendet, obwohl, wenn sich der Zustand mehrmals ändert, bevor der Browser das Ereignis senden kann, die Ereignisse zusammengefasst werden, sodass nur eines gesendet wird.

Sie können einen Ereignis-Listener für das `toggle` Ereignis verwenden, um zu erkennen, wann sich der Zustand des Widgets ändert:

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

### Erstellen einer offenen Disclosure-Box

Um die `<details>` Box im offenen Zustand zu starten, fügen Sie das Boolean `open` Attribut hinzu:

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

### Mehrere benannte Disclosure-Boxen

Wir schließen mehrere `<details>` Boxen ein, alle mit demselben Namen, sodass nur eine gleichzeitig geöffnet werden kann:

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

Versuchen Sie, alle Disclosure-Widgets zu öffnen. Wenn Sie eines öffnen, schließen sich alle anderen automatisch.

### Anpassung des Erscheinungsbildes

Nun lassen Sie uns etwas CSS anwenden, um das Erscheinungsbild der Disclosure-Box zu ändern.

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

Dieses CSS erzeugt ein Aussehen, das einer Registerkartenoberfläche ähnelt, bei der das Klicken auf die Registerkarte diese öffnet, um ihren Inhalt anzuzeigen.

Der Selektor `details[open]` kann verwendet werden, um das Element zu gestalten, das geöffnet ist.

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

Das Disclosure-Dreieck selbst kann angepasst werden, obwohl dies nicht so umfassend unterstützt wird. Es gibt Variationen in der Unterstützung dieser Anpassung durch Browser aufgrund experimenteller Implementierungen, als das Element standardisiert wurde. Daher müssen wir für eine Weile mehrere Ansätze verwenden.

Das {{HTMLElement("summary")}} Element unterstützt die {{cssxref("list-style")}} Kurzschreibweise und dessen Langformen wie {{cssxref("list-style-type")}}, um das Disclosure-Dreieck nach Wunsch zu ändern (normalerweise mit {{cssxref("list-style-image")}}). Zum Beispiel können wir das Piktogramm des Disclosure-Widgets entfernen, indem wir `list-style: none` setzen.

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

Dieses CSS erzeugt ein Aussehen, das einer Registerkartenoberfläche ähnelt, bei der das Aktivieren der Registerkarte diese erweitert öffnet, um ihren Inhalt anzuzeigen.

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
        >, Gliederungswurzel, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}} Element gefolgt von
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
