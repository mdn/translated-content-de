---
title: "CSP: sandbox"
slug: Web/HTTP/Headers/Content-Security-Policy/sandbox
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`sandbox`** Direktive aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem Attribut [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) von {{HTMLElement("iframe")}}. Sie wendet Einschränkungen auf die Aktionen einer Seite an, einschließlich der Verhinderung von Pop-ups, der Ausführung von Plugins und Skripten und der Durchsetzung einer Same-Origin-Policy.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">Typ der Direktive</th>
      <td>{{Glossary("Document_directive", "Dokumentdirektive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird nicht im {{HTMLElement("meta")}}
        Element oder vom
        {{HTTPHeader("Content-Security-policy-Report-Only")}}
        Header-Feld unterstützt.
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
  - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit dem [download](/de/docs/Web/HTML/Element/a#download) Attribut sowie durch die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder ob der JavaScript-Code dies ohne Benutzerinteraktion initiiert hat.
- `allow-forms`
  - : Erlaubt der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird das Formular normal angezeigt, aber das Absenden wird keine Eingabevalidierung auslösen, Daten an einen Webserver senden oder einen Dialog schließen.
- `allow-modals`
  - : Erlaubt der Seite das Öffnen von modalen Fenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt der Seite auch, das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) Ereignis zu empfangen.
- `allow-orientation-lock`
  - : Lässt die Ressource die [Bildschirmorientierung sperren](/de/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Erlaubt der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Erlaubt Pop-ups (wie von [`Window.open()`](/de/docs/Web/API/Window/open), `target="_blank"`, [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog)). Wenn dieses Schlüsselwort nicht verwendet wird, wird diese Funktionalität stillschweigend fehlschlagen.
- `allow-popups-to-escape-sandbox`
  - : Erlaubt es einem sandgestrahlten Dokument, neue Fenster zu öffnen, ohne die Sandboxing-Flags auf diese zu erzwingen. Dies ermöglicht es beispielsweise, eine Drittanbieterwerbung sicher zu sandboxen, ohne dieselben Einschränkungen auf die Seite zu erzwingen, auf die die Anzeige verweist.
- `allow-presentation`
  - : Erlaubt Embedders die Kontrolle darüber, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
- `allow-same-origin`
  - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung stammend behandelt, der immer die {{Glossary("same-origin_policy", "Same-Origin-Policy")}} fehlschlägt (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
- `allow-scripts`
  - : Erlaubt der Seite das Ausführen von Skripten (aber nicht das Erstellen von Pop-up-Fenstern). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Lässt die Ressource den Zugriff auf die Speichermöglichkeiten des Elternteils mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API) anfordern.
- `allow-top-navigation`
  - : Lässt die Ressource den Kontext der obersten Browserebene (den mit dem Namen `_top`) navigieren.
- `allow-top-navigation-by-user-activation`
  - : Lässt die Ressource den Kontext der obersten Browserebene navigieren, aber nur, wenn er durch eine Benutzeraktion initiiert wird.
- `allow-top-navigation-to-custom-protocols`
  - : Erlaubt Navigierungen zu nicht-`http` Protokollen, die im Browser integriert oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktionalität wird auch durch das `allow-popups` oder `allow-top-navigation` Schlüsselwort aktiviert.

> [!NOTE]
> Die Werte `allow-top-navigation` und verwandte Werte sind nur für eingebettete Dokumente (wie z.B. untergeordnete iframes) sinnvoll. Für eigenständige Dokumente haben diese Werte keine Wirkung, da der Kontext der obersten Browserebene das Dokument selbst ist.

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
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Attribut auf {{HTMLElement("iframe")}} Elementen
