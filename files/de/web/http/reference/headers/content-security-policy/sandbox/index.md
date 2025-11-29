---
title: "Content-Security-Policy: sandbox-Direktive"
short-title: sandbox
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox
l10n:
  sourceCommit: 932ec571065343d237db0c14869099bc83921041
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`sandbox`**-Direktive ermöglicht ein Sandbox für die angeforderte Ressource ähnlich wie das {{HTMLElement("iframe")}} [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut.
Sie wendet Beschränkungen auf die Aktionen einer Seite an, einschließlich der Verhinderung von Popups, der Verhinderung der Ausführung von Plugins und Skripten und der Durchsetzung einer Same-Origin-Policy.

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
        Diese Direktive wird nicht im {{HTMLElement("meta")}}-Element oder durch das {{HTTPHeader("Content-Security-policy-Report-Only")}} Header-Feld unterstützt.
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
  - : Ermöglicht das Herunterladen von Dateien über ein {{HTMLElement("a")}} oder {{HTMLElement("area")}}-Element mit dem [download](/de/docs/Web/HTML/Reference/Elements/a#download) Attribut sowie durch Navigation, die zum Herunterladen einer Datei führt.
    Das funktioniert unabhängig davon, ob der Benutzer auf den Link geklickt hat oder ob es durch JS-Code ohne Benutzerinteraktion initiiert wurde.
- `allow-forms`
  - : Erlaubt der Seite, Formulare abzuschicken. Wenn dieses Schlüsselwort nicht verwendet wird, wird das Formular normal angezeigt, aber das Abschicken löst keine Eingabevalidierung, das Senden von Daten an einen Webserver oder das Schließen eines Dialogs aus.
- `allow-modals`
  - : Erlaubt der Seite das Öffnen von Modalfenstern durch [`Window.alert()`](/de/docs/Web/API/Window/alert), [`Window.confirm()`](/de/docs/Web/API/Window/confirm), [`Window.print()`](/de/docs/Web/API/Window/print) und [`Window.prompt()`](/de/docs/Web/API/Window/prompt), während das Öffnen eines {{HTMLElement("dialog")}} grundsätzlich erlaubt ist. Es erlaubt auch, dass die Seite das [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) Ereignis empfangen kann.
- `allow-orientation-lock`
  - : Ermöglicht der Ressource das [Sperren der Bildschirmausrichtung](/de/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Erlaubt der Seite die Nutzung der [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Erlaubt Popups (erstellt beispielsweise durch [`Window.open()`](/de/docs/Web/API/Window/open) oder `target="_blank"`).
    Wenn dieses Schlüsselwort nicht verwendet wird, schlägt die Anzeige von Popups stillschweigend fehl.
- `allow-popups-to-escape-sandbox`
  - : Erlaubt einem sandboxed Dokument, neue Fenster zu öffnen, ohne die Sandboxing-Flags auf sie anzuwenden. Dies ermöglicht zum Beispiel, dass eine Drittanbieter-Werbung sicher gesandboxt wird, ohne die gleichen Einschränkungen auf die Seite anzuwenden, zu der die Anzeige verlinkt.
- `allow-presentation`
  - : Erlaubt Embedders die Kontrolle darüber, ob ein iframe eine [Präsentationssitzung](/de/docs/Web/API/PresentationRequest) starten kann.
- `allow-same-origin`
  - : Erlaubt einer sandboxed Ressource, ihren {{Glossary("origin", "Ursprung")}} beizubehalten.
    Eine sandboxed Ressource wird ansonsten als von einem {{Glossary("Origin#opaque_origin", "opaken Ursprung")}} stammend behandelt, was sicherstellt, dass sie immer die Überprüfungen der {{Glossary("same-origin_policy", "Same-Origin-Policy")}} nicht bestehen kann und daher keinen Zugriff auf [`localstorage` und `document.cookie`](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_data_storage_access) und einige JavaScript-APIs hat.
    Die {{httpheader("Origin")}} von sandboxed Ressourcen ohne das `allow-same-origin` Schlüsselwort ist `null`.
- `allow-scripts`
  - : Erlaubt der Seite das Ausführen von Skripten (aber nicht das Erstellen von Pop-up-Fenstern). Wenn dieses Schlüsselwort nicht verwendet wird, ist diese Operation nicht erlaubt.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Ermöglicht der Ressource den Zugriff auf die Speicherfähigkeiten des übergeordneten Elements mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API) anzufordern.
- `allow-top-navigation`
  - : Erlaubt der Ressource, den obersten Browsing-Kontext (den als `_top` bezeichneten) zu navigieren.
- `allow-top-navigation-by-user-activation`
  - : Erlaubt der Ressource die Navigation des obersten Browsing-Kontextes, jedoch nur, wenn dies durch eine Benutzeraktion initiiert wird.
- `allow-top-navigation-to-custom-protocols`
  - : Erlaubt die Navigation zu nicht-`http`-Protokollen, die im Browser eingebaut oder [von einer Website registriert](/de/docs/Web/API/Navigator/registerProtocolHandler) wurden. Diese Funktion wird auch durch das Schlüsselwort `allow-popups` oder `allow-top-navigation` aktiviert.

> [!NOTE]
> Die Schlüsselwörter `allow-top-navigation` und verwandte Werte sind nur für eingebettete Dokumente (z.B. kind-iframe) sinnvoll. Für eigenständige Dokumente haben diese Werte keine Wirkung, da der oberste Browsing-Kontext das Dokument selbst ist.

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
- [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut bei {{HTMLElement("iframe")}}
  Elementen
