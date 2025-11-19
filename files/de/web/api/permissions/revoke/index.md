---
title: "Berechtigungen: revoke()-Methode"
short-title: revoke()
slug: Web/API/Permissions/revoke
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}{{deprecated_header}}

Die **`revoke()`**-Methode der [`Permissions`](/de/docs/Web/API/Permissions)-Schnittstelle setzt eine aktuell festgelegte Berechtigung zurück auf ihren Standardzustand, der normalerweise `prompt` ist.
Diese Methode wird auf dem globalen [`Permissions`](/de/docs/Web/API/Permissions)-Objekt [`navigator.permissions`](/de/docs/Web/API/Navigator/permissions) aufgerufen.

Diese Methode wurde aus der Hauptspezifikation der Berechtigungen-API entfernt, da der Anwendungsfall unklar ist.
Berechtigungen werden durch den Browser verwaltet und das aktuelle Berechtigungsmodell sieht nicht vor, dass der Website-Entwickler Berechtigungen ausdrücklich anfordern oder widerrufen kann. Browser haben diese API hinter Präferenzen eingeführt, aber es ist unwahrscheinlich, dass sie den Standardweg erreicht.
Für weitere Informationen siehe die [ursprüngliche Diskussion über die Entfernung von `permissions.revoke()`](https://github.com/w3c/permissions/issues/46).

## Syntax

```js-nolint
revoke(permissionDescriptor)
```

### Parameter

- `permissionDescriptor`
  - : Ein Objekt, das Optionen für die `revoke`-Operation festlegt.
    Die verfügbaren Optionen für diesen Deskriptor hängen von der Berechtigungsart ab.

    Alle Berechtigungen haben einen Namen:
    - `name`
      - : Ein String, der den Namen der API enthält, deren Berechtigungen Sie abfragen möchten.
        Das zurückgegebene {{jsxref("Promise")}} wird mit einem {{jsxref("TypeError")}} ablehnen, wenn der Berechtigungsname vom Browser nicht unterstützt wird.

    Für die `push` Berechtigungen können Sie auch angeben:
    - `userVisibleOnly` {{optional_inline}}
      - : (Nur Push, nicht unterstützt in Firefox — siehe den Abschnitt Browser-Unterstützung unten) Gibt an, ob Sie für jede Nachricht eine Benachrichtigung anzeigen oder stille Push-Benachrichtigungen senden möchten.
        Der Standardwert ist `false`.

    Für die `midi` Berechtigung können Sie auch angeben:
    - `sysex` {{optional_inline}}
      - : Gibt an, ob Sie System-Exklusivnachrichten benötigen und/oder empfangen.
        Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das seinen Fulfillment-Handler mit einem [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)-Objekt aufruft, das das Ergebnis der Anfrage anzeigt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Abruf der `PermissionDescriptor`-Informationen ist auf irgendeine Weise fehlgeschlagen, oder die Berechtigung existiert nicht oder wird momentan nicht unterstützt (z.B. `midi` oder `push` mit `userVisibleOnly`).

## Beispiele

Diese Funktion kann von einer App verwendet werden, um zu beantragen, dass ihre eigene Geolocation-API-Berechtigung widerrufen wird.

```js
function revokePermission() {
  navigator.permissions.revoke({ name: "geolocation" }).then((result) => {
    report(result.state);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
