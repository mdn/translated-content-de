---
title: "<fencedframe>: Das Fenced Frame-Element"
slug: Web/HTML/Reference/Elements/fencedframe
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}}, indem eine andere HTML-Seite in die aktuelle eingebettet wird. `<fencedframe>`s sind sehr ähnlich wie {{htmlelement("iframe")}}-Elemente hinsichtlich Form und Funktion, mit folgenden Unterschieden:

- Die Kommunikation zwischen dem Inhalt des `<fencedframe>` und der einbettenden Seite ist eingeschränkt.
- Ein `<fencedframe>` kann auf datenübergreifende Seiten zugreifen, jedoch nur in einem sehr speziellen Satz von kontrollierten Umständen, die die Privatsphäre der Nutzer wahren.
- Ein `<fencedframe>` kann nicht manipuliert werden oder seine Daten können nicht über reguläre Skripte zugegriffen werden (zum Beispiel das Lesen oder Setzen der Quell-URL). Inhalte im `<fencedframe>` können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, noch kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist eine Art von `<iframe>` mit eingebauten, nativeren Datenschutzfunktionen. Es adressiert die Nachteile von `<iframe>`s wie die Abhängigkeit von Drittanbieter-Cookies und andere Datenschutzrisiken. Weitere Informationen finden Sie in der [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow` {{experimental_inline}}

  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<fencedframe>` an, die definiert, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anforderung zur Verfügung stehen. Weitere Details, welche Funktionen über eine auf einem fenced frame gesetzte Policy gesteuert werden können, finden Sie unter [Permissions Policies, die in fenced frames verfügbar sind](#permissions_policies,_die_in_fenced_frames_verfügbar_sind).

- `height` {{experimental_inline}}

  - : Eine integer Zahl ohne Einheit, die die Höhe des fenced frame in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Eine integer Zahl ohne Einheit, die die Breite des fenced frame in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Permissions Policies, die in fenced frames verfügbar sind

Berechtigungen, die vom Top-Level-Kontext an einen fenced frame delegiert werden, um Funktionen zu erlauben oder zu verweigern, könnten als Kommunikationskanal verwendet werden und stellen daher ein Datenschutzrisiko dar. Daher sind Standard-Webfunktionen, deren Verfügbarkeit über [Permissions Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) gesteuert werden können (z. B. [`camera`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)), innerhalb von fenced frames **nicht verfügbar**.

Die einzigen Funktionen, die durch eine Policy innerhalb von fenced frames aktiviert werden können, sind die speziell dafür gestalteten Funktionen:

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

Derzeit sind diese immer innerhalb von fenced frames aktiviert. In Zukunft wird über das `allow`-Attribut des `<fencedframe>` gesteuert, welche davon aktiviert sind. Das Blockieren von Privacy-Sandbox-Funktionen auf diese Weise wird auch den fenced frame daran hindern zu laden – es wird keinen Kommunikationskanal geben.

## Fokus über fenced frame-Grenzen hinweg

Die Möglichkeit, den aktiven Fokus des Dokuments über fenced frame-Grenzen hinweg zu bewegen (d.h. von einem Element außerhalb des fenced frame zu einem innerhalb oder umgekehrt), ist begrenzt. Benutzerinitiierte Aktionen wie ein Klick oder ein Tab können dies tun, da dort kein Fingerprinting-Risiko besteht.

Der Versuch, die Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu überschreiten, ist jedoch verboten – ein bösartiges Skript könnte eine Reihe solcher Aufrufe verwenden, um abgeleitete Informationen über die Grenze hinweg zu leaken.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} erlaubt das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mit der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkungen auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>`-Elements festgelegt werden. In solchen Fällen führt das Ändern der `width` oder `height` des `<fencedframe>` dazu, dass sich die Größe des eingebetteten Containers auf der Seite ändert, aber das Dokument innerhalb des Containers wird visuell skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

## Barrierefreiheit

Personen, die mit unterstützender Technologie navigieren, beispielsweise mit einem Screenreader, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<fencedframe>` nutzen, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<fencedframe>` navigieren, um herauszufinden, was der eingebettete Inhalt ist. Diese Kontextverschiebung kann verwirrend und zeitaufwendig sein, insbesondere auf Seiten mit mehreren `<fencedframe>`s und/oder wenn Embeds interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine verwendende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält einen `FencedFrameConfig` aus der Anzeigenauktion der Protected Audience API, die dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```html
<fencedframe width="640" height="320"></fencedframe>
```

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.querySelector("fencedframe");
frame.config = frameConfig;
```

> [!NOTE] > `resolveToConfig: true` muss beim `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Ist dies nicht der Fall, wird die resultierende {{jsxref("Promise")}} in eine URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

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
          >phrasierender Inhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
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
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
