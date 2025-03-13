---
title: "<fencedframe>: Das Fenced Frame-Element"
slug: Web/HTML/Element/fencedframe
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML)-Element stellt einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} dar, der eine andere HTML-Seite in die aktuelle einbettet. `<fencedframe>`s sind in Form und Funktion den {{htmlelement("iframe")}}-Elementen sehr ähnlich, außer dass:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und der einbettenden Seite eingeschränkt ist.
- Ein `<fencedframe>` kann auf Cross-Site-Daten zugreifen, jedoch nur unter sehr spezifischen und kontrollierten Umständen, die die Privatsphäre der Nutzer wahren.
- Ein `<fencedframe>` kann nicht manipuliert werden, und auf seine Daten kann nicht über reguläres Skripting zugegriffen werden (z. B. das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des Einbettungskontexts zugreifen, noch kann der Einbettungskontext auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist ein Typ von `<iframe>` mit mehr nativen Datenschutzfunktionen. Es behebt Nachteile von `<iframe>`s wie die Abhängigkeit von Drittanbieter-Cookies und andere Datenschutzrisiken. Siehe [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API) für weitere Details.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow` {{experimental_inline}}

  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<fencedframe>` an, die definiert, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen. Siehe [Permissions-Policies für Fenced Frames](#permissions-policies_für_fenced_frames) für weitere Details zu den Funktionen, die über eine auf einem Fenced Frame gesetzte Policy kontrolliert werden können.

- `height` {{experimental_inline}}

  - : Eine ganzzahlige Einheit, die die Höhe des Fenced Frames in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Eine ganzzahlige Einheit, die die Breite des Fenced Frames in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Permissions-Policies für Fenced Frames

Berechtigungen, die vom obersten Kontext an einen Fenced Frame zur Erlaubnis bzw. Verweigerung von Funktionen delegiert werden, könnten als Kommunikationskanal genutzt werden und stellen daher eine Bedrohung für die Privatsphäre dar. Als Ergebnis stehen standardmäßige Web-Funktionen, deren Verfügbarkeit über eine [Permissions Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) kontrolliert werden kann (zum Beispiel [`camera`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)), **nicht** innerhalb von Fenced Frames zur Verfügung.

Die einzigen Funktionen, die durch eine Policy innerhalb von Fenced Frames aktiviert werden können, sind die spezifischen Funktionen, die für die Verwendung in Fenced Frames vorgesehen sind:

- [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`

Derzeit sind diese immer innerhalb von Fenced Frames aktiviert. In Zukunft wird mithilfe des `allow`-Attributs des `<fencedframe>` gesteuert werden können, welche aktiviert sind. Das Blockieren von Privacy-Sandbox-Funktionen auf diese Weise wird auch das Laden des Fenced Frames blockieren – es wird überhaupt keinen Kommunikationskanal geben.

## Fokus über Fenced Frame-Grenzen hinweg

Die Fähigkeit, den aktiven Fokus eines Dokuments über Fenced Frame-Grenzen hinweg zu bewegen (d. h. von einem Element außerhalb des Fenced Frames zu einem innenliegenden oder umgekehrt), ist eingeschränkt. Vom Nutzer initiierte Aktionen wie ein Klick oder Tab können dies tun, da sie kein Fingerprinting-Risiko darstellen.

Jedoch ist der Versuch, die Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu überschreiten, verboten – ein bösartiges Skript könnte eine Reihe solcher Aufrufe verwenden, um abgeleitete Informationen über die Grenze hinweg zu leaken.

## Positionierung und Skalierung

Als [ersetztes Element](/de/docs/Web/CSS/Replaced_element) ermöglicht das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mit der Eigenschaft {{cssxref("object-position")}} anzupassen.

> [!NOTE]
> Die Eigenschaft {{cssxref("object-fit")}} hat keine Auswirkung auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>` festgelegt werden. In solchen Fällen wird die Änderung der `width`- oder `height`-Eigenschaften des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite ändern, aber das Dokument innerhalb des Containers wird visuell passend skaliert. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d. h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleibt unverändert.

## Barrierefreiheit

Personen, die mit unterstützender Technologie wie einem Screenreader navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu beschreiben. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<fencedframe>` navigieren, um zu bestimmen, was der eingebettete Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwendig sein, insbesondere für Seiten mit mehreren `<fencedframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine verwendende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>`s gesetzt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` aus einer Anzeigenausschreibung der Protected Audience API, die dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```html
<fencedframe width="640" height="320"></fencedframe>
```

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.querySelector("fencedframe");
frame.config = frameConfig;
```

> **Hinweis:** `resolveToConfig: true` muss im Aufruf `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird die resultierende {{jsxref("Promise")}} auf eine URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

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
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
