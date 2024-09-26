---
title: "CSP: sandbox"
slug: Web/HTTP/Headers/Content-Security-Policy/sandbox
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)
**`sandbox`**-Direktive aktiviert einen Sandkasten für die angeforderte
Ressource, ähnlich dem {{HTMLElement("iframe")}}-[`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)
Attribut. Sie wendet Einschränkungen auf die Aktionen einer Seite an, einschließlich der Verhinderung von Popups, der Ausführung von Plugins und Skripten und der Durchsetzung einer Same-Origin-Policy.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Document directive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird im {{HTMLElement("meta")}}
        Element oder durch das
        {{HTTPHeader("Content-Security-policy-Report-Only")}}
        Header-Feld nicht unterstützt.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: sandbox;
Content-Security-Policy: sandbox <value>;
```

wobei `<value>` optional einer der folgenden Werte sein kann:

- `allow-downloads`
  - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Element/a#download) Attribut sowie durch die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder JS-Code dies ohne Benutzerinteraktion initiiert hat.
- `allow-forms`
  - : Erlaubt der Seite, Formulare zu übermitteln. Wenn dieses Schlüsselwort nicht verwendet wird, wird das Formular normal angezeigt, aber seine Übermittlung löst keine Eingabevalidierung aus, sendet keine Daten an einen Webserver und schließt keinen Dialog.
- `allow-modals`
  - : Erlaubt der Seite, modale Fenster durch {{domxref("Window.alert()")}}, {{domxref("Window.confirm()")}}, {{domxref("Window.print()")}} und {{domxref("Window.prompt()")}} zu öffnen, während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt auch der Seite, das {{domxref("BeforeUnloadEvent")}} zu empfangen.
- `allow-orientation-lock`
  - : Erlaubt der Ressource, die [Bildschirmorientierung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Erlaubt der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Erlaubt Popups (wie von {{domxref("Window.open()")}}, `target="_blank"`, {{domxref("Window.showModalDialog()")}}). Wenn dieses Schlüsselwort nicht verwendet wird, schlägt diese Funktionalität stillschweigend fehl.
- `allow-popups-to-escape-sandbox`
  - : Erlaubt einem dokumentierten Sandkasten, neue Fenster zu öffnen, ohne die Sandkastenflags auf sie anzuwenden. Dies ermöglicht beispielsweise einer Drittanbieteranzeige, sicher in einem Sandkasten zu sein, ohne die gleichen Einschränkungen auf die Seite anzuwenden, auf die die Anzeige verweist.
- `allow-presentation`
  - : Erlaubt Einbettern, die Kontrolle darüber zu haben, ob ein iframe eine [Präsentationssitzung starten](/de/docs/Web/API/PresentationRequest) kann.
- `allow-same-origin`
  - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung stammend behandelt, der immer die {{Glossary("same-origin policy")}} fehlschlägt (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
- `allow-scripts`
  - : Erlaubt der Seite, Skripte auszuführen (aber keine Popup-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Erlaubt der Ressource, Zugriff auf die Speicherkapazitäten des Elternteils mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern.
- `allow-top-navigation`
  - : Erlaubt der Ressource, den oberen Browsing-Kontext (denjenigen, der `_top` genannt wird) zu navigieren.
- `allow-top-navigation-by-user-activation`
  - : Erlaubt der Ressource, den oberen Browsing-Kontext zu navigieren, jedoch nur, wenn er durch eine Benutzeraktion initiiert wird.
- `allow-top-navigation-to-custom-protocols`
  - : Erlaubt die Navigation zu nicht-`http`-Protokollen, die im Browser eingebaut sind oder [von einer Webseite registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) wurden. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

> [!NOTE]
> Die `allow-top-navigation` und verwandte Werte haben nur für eingebettete Dokumente (wie untergeordnete iframes) Sinn. Für eigenständige Dokumente haben diese Werte keine Wirkung, da der obere Browsing-Kontext das Dokument selbst ist.

## Beispiele

```http
Content-Security-Policy: sandbox allow-scripts;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Attribut bei {{HTMLElement("iframe")}}
  Elementen
