---
title: "Content-Security-Policy: sandbox-Direktive"
short-title: sandbox
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`sandbox`**-Direktive aktiviert eine Sandbox für die angeforderte Ressource, ähnlich dem {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut. Sie schränkt die Aktionen einer Seite ein, indem sie unter anderem Pop-ups verhindert, die Ausführung von Plugins und Skripten blockiert und eine Same-Origin-Policy erzwingt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Document_directive", "Dokumentdirektive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird nicht im {{HTMLElement("meta")}}-Element oder vom {{HTTPHeader("Content-Security-policy-Report-Only")}}-Headerfeld unterstützt.
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
  - : Erlaubt das Herunterladen von Dateien über ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut, sowie durch eine Navigation, die zum Herunterladen einer Datei führt. Dies funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder ob der Vorgang durch JS-Code ohne Benutzerinteraktion initiiert wurde.
- `allow-forms`
  - : Erlaubt der Seite das Absenden von Formularen. Wenn dieses Schlüsselwort nicht verwendet wird, wird das Formular normal angezeigt, aber das Absenden löst keine Eingabevalidierung, das Senden von Daten an einen Webserver oder das Schließen eines Dialogs aus.
- `allow-modals`
  - : Erlaubt der Seite das Öffnen von Modalfenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} unabhängig von diesem Schlüsselwort erlaubt ist. Es erlaubt auch, dass die Seite das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Ereignis empfängt.
- `allow-orientation-lock`
  - : Ermöglicht der Ressource, die [Bildschirmorientierung zu sperren](/de/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Erlaubt der Seite die Verwendung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Erlaubt Pop-ups (erzeugt beispielsweise durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`). Wenn dieses Schlüsselwort nicht verwendet wird, wird die Anzeige von Pop-ups stummgeschaltet.
- `allow-popups-to-escape-sandbox`
  - : Erlaubt einem dokumentierten Sandbox, neue Fenster zu öffnen, ohne die Sandbox-Flags auf sie zu erzwingen. Dies erlaubt es beispielsweise, dass eine Drittanbieter-Werbung sicher in eine Sandbox gesetzt wird, ohne dieselben Einschränkungen auf die Seite zu erzwingen, auf die die Anzeige verlinkt.
- `allow-presentation`
  - : Erlaubt den Einbettenden, die Kontrolle darüber zu haben, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
- `allow-same-origin`
  - : Erlaubt einer in der Sandbox befindlichen Ressource, ihren {{Glossary("origin", "Ursprung")}} beizubehalten. Eine in der Sandbox befindliche Ressource wird andernfalls als von einem {{Glossary("Origin#opaque_origin", "undurchsichtigen Ursprung")}} stammend betrachtet, was sicherstellt, dass sie stets bei {{Glossary("same-origin_policy", "Same-Origin-Policy")}}-Prüfungen fehlschlägt und somit nicht auf [`localstorage` und `document.cookie`](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs zugreifen kann. Der {{httpheader("Origin")}} von in der Sandbox befindlichen Ressourcen ohne das `allow-same-origin`-Schlüsselwort ist `null`.
- `allow-scripts`
  - : Erlaubt der Seite, Skripte auszuführen (aber keine Pop-up-Fenster zu erstellen). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Aktion nicht erlaubt.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Erlaubt der Ressource, den Zugriff auf die Speicherfähigkeiten des Elternteils mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern.
- `allow-top-navigation`
  - : Erlaubt der Ressource, den obersten Browsing-Kontext zu navigieren (denjenigen, der `_top` genannt wird).
- `allow-top-navigation-by-user-activation`
  - : Erlaubt der Ressource, den obersten Browsing-Kontext zu navigieren, aber nur, wenn es durch eine Benutzeraktion initiiert wird.
- `allow-top-navigation-to-custom-protocols`
  - : Erlaubt Navigationsvorgänge zu nicht-`http`-Protokollen, die in den Browser oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) wurden. Diese Funktion wird auch durch das `allow-popups`- oder `allow-top-navigation`-Schlüsselwort aktiviert.

> [!NOTE]
> Die Werte `allow-top-navigation` und die damit verbundenen Werte sind nur für eingebettete Dokumente (wie Kind-iframes) sinnvoll. Für eigenständige Dokumente haben diese Werte keine Wirkung, da der oberste Browsing-Kontext das Dokument selbst ist.

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
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut auf {{HTMLElement("iframe")}}
  Elementen
