---
title: "CSP: sandbox"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`sandbox`** Direktive aktiviert eine Sandbox für die angeforderte
Ressource ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)
Attribut. Sie wendet Einschränkungen auf die Aktionen einer Seite an, einschließlich der Verhinderung von Pop-ups,
der Ausführung von Plugins und Skripten, und der Durchsetzung einer Same-Origin-Policy.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Document_directive", "Dokumentdirektive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird nicht im {{HTMLElement("meta")}}
        Element oder durch das
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
  - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit dem [download](/de/docs/Web/HTML/Element/a#download) Attribut, sowie über die Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Nutzer auf den Link geklickt hat oder JS-Code es ohne Nutzerinteraktion initiiert hat.
- `allow-forms`
  - : Erlaubt der Seite, Formulare einzureichen. Wenn dieses Schlüsselwort nicht verwendet wird, wird das Formular normal angezeigt, aber das Einreichen wird keine Eingabevalidierung auslösen, Daten an einen Webserver senden oder einen Dialog schließen.
- `allow-modals`
  - : Erlaubt der Seite, modale Fenster zu öffnen durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), wobei das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt auch der Seite, das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) Ereignis zu empfangen.
- `allow-orientation-lock`
  - : Erlaubt der Ressource, die [Bildschirmorientierung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Erlaubt der Seite, die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) zu verwenden.
- `allow-popups`
  - : Erlaubt Pop-ups (wie von [`Window.open()`](/de/docs/Web/API/Window/open), `target="_blank"`, [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog)). Wenn dieses Schlüsselwort nicht verwendet wird, wird diese Funktionalität stillschweigend fehlschlagen.
- `allow-popups-to-escape-sandbox`
  - : Erlaubt es einem dokumentierten Dokument, neue Fenster zu öffnen, ohne die Sandboxing-Flags auf sie zu erzwingen. Dies ermöglicht zum Beispiel, dass eine Drittanbieter-Werbung sicher gesandboxt wird, ohne die gleichen Einschränkungen auf die Seite zu erzwingen, auf die die Anzeige verlinkt.
- `allow-presentation`
  - : Erlaubt Embedders, die Kontrolle darüber zu haben, ob ein iframe eine [Präsentationssitzung starten](/de/docs/Web/API/PresentationRequest) kann.
- `allow-same-origin`
  - : Wenn dieses Token nicht verwendet wird, wird die Ressource als von einem speziellen Ursprung betrachtet, der die {{Glossary("same-origin_policy", "Same-Origin-Policy")}} immer fehlschlagen lässt (was möglicherweise den Zugriff auf [Datenspeicherung/Cookies](/de/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs verhindert).
- `allow-scripts`
  - : Erlaubt der Seite, Skripte auszuführen (aber keine Pop-up-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Erlaubt der Ressource den Zugriff auf die Speicherfähigkeiten des übergeordneten Elements mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern.
- `allow-top-navigation`
  - : Erlaubt der Ressource, den Top-Level-Browsing-Kontext zu navigieren (denjenigen, der `_top` genannt wird).
- `allow-top-navigation-by-user-activation`
  - : Erlaubt der Ressource, den Top-Level-Browsing-Kontext zu navigieren, aber nur, wenn dies durch eine Nutzeraktion initiiert wurde.
- `allow-top-navigation-to-custom-protocols`
  - : Erlaubt Navigierungen zu nicht-`http`-Protokollen, die in den Browser integriert oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) sind. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

> [!NOTE]
> Die Werte `allow-top-navigation` und verwandte Werte machen nur für eingebettete Dokumente (wie Kind-Ifames) Sinn. Für eigenständige Dokumente haben diese Werte keine Wirkung, da der Top-Level-Browsing-Kontext das Dokument selbst ist.

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
- [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Attribut auf {{HTMLElement("iframe")}}
  Elementen
