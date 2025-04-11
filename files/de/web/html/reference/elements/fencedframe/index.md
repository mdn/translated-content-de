---
title: "<fencedframe>: Das Fenced Frame-Element"
slug: Web/HTML/Reference/Elements/fencedframe
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}}, der eine andere HTML-Seite in die aktuelle einbettet. `<fencedframe>`s sind in Form und Funktion sehr ähnlich zu {{htmlelement("iframe")}}-Elementen, außer dass:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und der einbettenden Seite eingeschränkt ist.
- Ein `<fencedframe>` kann auf datenübergreifende Seiten zugreifen, aber nur in einem sehr spezifischen, kontrollierten Umfeld, das die Privatsphäre der Benutzer schützt.
- Ein `<fencedframe>` kann nicht manipuliert oder seine Daten über reguläres Skripting abgerufen werden (z.B. das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, noch kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist eine Art von `<iframe>` mit mehr eingebauten Datenschutzfunktionen. Es behebt Schwächen von `<iframe>`s wie die Abhängigkeit von Drittanbieter-Cookies und andere Datenschutzrisiken. Weitere Details finden Sie in der [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow` {{experimental_inline}}

  - : Gibt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<fencedframe>` an, die definiert, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen. Weitere Details, welche Funktionen über eine auf einem fenced frame gesetzte Richtlinie gesteuert werden können, finden Sie unter [Berechtigungsrichtlinien für fenced frames](#berechtigungsrichtlinien_für_fenced_frames).

- `height` {{experimental_inline}}

  - : Ein ganzzahliger Wert ohne Einheit, der die Höhe des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Ein ganzzahliger Wert ohne Einheit, der die Breite des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Berechtigungsrichtlinien für fenced frames

Berechtigungen, die vom obersten Kontext an ein fenced frame delegiert werden, um Funktionen zu erlauben oder zu verweigern, könnten als Kommunikationskanal genutzt werden und stellen daher eine Datenschutzbedrohung dar. Daher sind standardmäßige Webfunktionen, deren Verfügbarkeit über eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) gesteuert werden kann (zum Beispiel, [`camera`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)), **nicht verfügbar** innerhalb von fenced frames.

Die einzigen Funktionen, die durch eine Richtlinie innerhalb von fenced frames aktiviert werden können, sind spezifische Funktionen, die dafür ausgelegt sind, innerhalb von fenced frames verwendet zu werden:

- [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`

Derzeit sind diese immer innerhalb von fenced frames aktiviert. In Zukunft wird steuerbar sein, welche davon aktiviert sind, indem das `<fencedframe>` `allow`-Attribut verwendet wird. Das Blockieren von Funktionen der Privacy Sandbox auf diese Weise wird auch das Laden des fenced frames blockieren – es wird überhaupt keinen Kommunikationskanal geben.

## Fokussierung über fenced frame-Grenzen hinweg

Die Möglichkeit, den aktiven Fokus des Dokuments über fenced frame-Grenzen hinweg zu verschieben (d.h. von einem Element außerhalb des fenced frames zu einem innerhalb oder umgekehrt), ist begrenzt. Benutzerinitiierte Aktionen wie ein Klick oder ein Tab können dies tun, da hier kein Fingerabdruckrisiko besteht.

Der Versuch, die Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu überschreiten, ist jedoch untersagt – ein bösartiges Skript könnte eine Reihe solcher Aufrufe verwenden, um abgeleitete Informationen über die Grenze hinweg zu leaken.

## Positionierung und Skalierung

Als ein {{Glossary("replaced_elements", "ersetztes Element")}} erlaubt das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mit der Eigenschaft {{cssxref("object-position")}} zu justieren.

> [!NOTE]
> Die Eigenschaft {{cssxref("object-fit")}} hat keine Auswirkung auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth` und `contentHeight` Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config) Objekts des `<fencedframe>` festgelegt werden. In solchen Fällen wird das Ändern der `width` oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite ändern, jedoch wird das Dokument innerhalb des Containers visuell angepasst, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleibt unverändert.

## Barrierefreiheit

Personen, die mit unterstützender Technologie navigieren, wie z. B. einem Screenreader, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt kurz beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<fencedframe>` navigieren, um festzustellen, was sein eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitraubend sein, insbesondere für Seiten mit mehreren `<fencedframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) Objekt, welches dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` von einer Werbeauktion der Protected Audience API, die dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

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

> **Note:** `resolveToConfig: true` muss in den `runAdAuction()` Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird die resultierende {{jsxref("Promise")}} zu einem URN aufgelöst, der nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Kein.</td>
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
- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
