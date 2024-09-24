---
title: "<fencedframe>: Das Fenced-Frame-Element"
slug: Web/HTML/Element/fencedframe
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen verschachtelten {{Glossary("browsing context")}}, und bettet eine andere HTML-Seite in die aktuelle ein. `<fencedframe>`s sind den {{htmlelement("iframe")}}-Elementen in Form und Funktion sehr ähnlich, außer dass:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und der einbettenden Seite eingeschränkt ist.
- Ein `<fencedframe>` kann auf Cross-Site-Daten zugreifen, aber nur unter sehr spezifischen kontrollierten Umständen, die die Privatsphäre des Nutzers wahren.
- Ein `<fencedframe>` kann nicht manipuliert oder seine Daten über reguläres Skripting abgerufen werden (zum Beispiel das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen und umgekehrt kann der einbettende Kontext nicht auf das DOM des `<fencedframe>`s zugreifen.

Das `<fencedframe>`-Element ist eine Art `<iframe>` mit integrierten Datenschutzfunktionen. Es behebt Schwächen von `<iframe>`s wie die Abhängigkeit von Drittanbieter-Cookies und andere Datenschutzrisiken. Siehe [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API) für weitere Details.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow` {{experimental_inline}}

  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) für das `<fencedframe>` an, die festlegt, welche Funktionen für das `<fencedframe>` basierend auf dem Ursprung der Anfrage verfügbar sind. Weitere Einzelheiten zu den Funktionen, die über eine Richtlinie in einem Fenced Frame gesteuert werden können, finden Sie unter [Permissions Policies verfügbar für Fenced Frames](#berechtigungspolitiken_für_fenced_frames).

- `height` {{experimental_inline}}

  - : Eine ganzzahlige Einheit, die die Höhe des Fenced Frames in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Eine ganzzahlige Einheit, die die Breite des Fenced Frames in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Berechtigungspolitiken für Fenced Frames

Berechtigungen, die vom obersten Kontext an ein Fenced Frame zum Zulassen und Verweigern von Funktionen delegiert werden, könnten als Kommunikationskanal genutzt werden und stellen daher eine Bedrohung für die Privatsphäre dar. Daher sind Standard-Web-Funktionen, deren Verfügbarkeit über eine [Permissions Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy) gesteuert werden kann (z. B. [`camera`](/de/docs/Web/HTTP/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Headers/Permissions-Policy/geolocation)), **nicht verfügbar** innerhalb von Fenced Frames.

Die einzigen Funktionen, die durch eine Richtlinie innerhalb von Fenced Frames aktiviert werden können, sind die spezifischen Funktionen, die für die Verwendung innerhalb von Fenced Frames entwickelt wurden:

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

Derzeit sind diese Funktionen immer in Fenced Frames aktiviert. In Zukunft wird gesteuert werden können, welche aktiviert sind, indem das `allow`-Attribut des `<fencedframe>` verwendet wird. Das Blockieren von Privacy-Sandbox-Funktionen auf diese Weise wird auch das Laden des Fenced Frames blockieren — es wird überhaupt keinen Kommunikationskanal geben.

## Fokussierung über Fenced Frame-Grenzen

Die Fähigkeit, den aktiven Fokus des Dokuments über die Grenzen eines Fenced Frames zu verschieben (d. h. von einem Element außerhalb des Fenced Frames zu einem innerhalb oder umgekehrt), ist eingeschränkt. Nutzerinitiierte Aktionen wie ein Klick oder ein Tab können dies tun, da dort kein Fingerabdruck-Risiko besteht.

Jedoch ist der Versuch, die Grenze über einen API-Aufruf wie {{domxref("HTMLElement.focus()")}} zu durchqueren, untersagt — ein böswilliges Skript könnte eine Reihe solcher Aufrufe verwenden, um abgeleitete Informationen über die Grenze hinweg zu leaken.

## Positionierung und Skalierung

Als [ersetztes Element](/de/docs/Web/CSS/Replaced_element) erlaubt das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Kastens mit der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Wirkung auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des `config`-Objekts des `<fencedframe>`s gesetzt werden. In solchen Fällen wird das Ändern der `width` oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite ändern, aber das Dokument innerhalb des Containers wird visuell skaliert, um zu passen. Die berichtete Breite und Höhe des eingebetteten Dokuments (d. h. {{domxref("Window.innerWidth")}} und {{domxref("Window.innerHeight")}}) bleiben unverändert.

## Barrierefreiheit

Menschen, die mit unterstützender Technologie wie einem Screenreader navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<fencedframe
  title="Werbung für Neuen Log. Von Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was dessen eingebetteter Inhalt ist. Diese Kontextverschiebung kann verwirrend und zeitaufwändig sein, insbesondere für Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein {{domxref("FencedFrameConfig")}}-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` von einer Auktion der Protected Audience API's Anzeigen, die dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

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

> **Hinweis:** `resolveToConfig: true` muss im Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird die resultierende {{jsxref("Promise")}} zu einem URN aufgelöst, der nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Technische Übersicht

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
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLFencedFrameElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- [Fenced Frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [Die Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
