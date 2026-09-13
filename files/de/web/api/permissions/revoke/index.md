---
title: "Berechtigungen: revoke()-Methode"
short-title: revoke()
slug: Web/API/Permissions/revoke
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

Die **`revoke()`**-Methode des [`Permissions`](/de/docs/Web/API/Permissions)-Interfaces setzt eine derzeit gesetzte Berechtigung auf ihren Standardzustand zurück, der normalerweise `prompt` ist. Diese Methode wird auf dem globalen [`Permissions`](/de/docs/Web/API/Permissions)-Objekt [`navigator.permissions`](/de/docs/Web/API/Navigator/permissions) aufgerufen.

Diese Methode wurde aus der Hauptspezifikation der Berechtigungen-API entfernt, da ihr Anwendungsfall unklar ist. Berechtigungen werden vom Browser verwaltet, und das aktuelle Berechtigungsmodell sieht nicht vor, dass der Site-Entwickler Berechtigungen imperativ anfordern oder widerrufen kann. Browser haben diese API hinter Präferenzen eingeführt, aber es ist unwahrscheinlich, dass sie den Standardprozess erreicht. Für mehr Kontext siehe die [ursprüngliche Diskussion zur Entfernung von `permissions.revoke()`](https://github.com/w3c/permissions/issues/46).

## Syntax

```js-nolint
revoke(permissionDescriptor)
```

### Parameter

- `permissionDescriptor`
  - : Ein Objekt, das Optionen für den `revoke`-Vorgang festlegt. Die verfügbaren Optionen für diesen Descriptor hängen vom Berechtigungstyp ab.

    Alle Berechtigungen haben einen Namen:
    - `name`
      - : Ein String, der den Namen der API enthält, deren Berechtigungen Sie abfragen möchten. Das zurückgegebene {{jsxref("Promise")}} wird mit einem {{jsxref("TypeError")}} abgelehnt, wenn der Berechtigungsname vom Browser nicht unterstützt wird.

    Für die `push`-Berechtigungen kann auch angegeben werden:
    - `userVisibleOnly` {{optional_inline}}
      - : (Nur für Push, nicht in Firefox unterstützt — siehe den Abschnitt Browser-Kompatibilität unten) Gibt an, ob Sie für jede Nachricht eine Benachrichtigung anzeigen möchten oder stille Push-Benachrichtigungen senden können. Der Standardwert ist `false`.

    Für die `midi`-Berechtigung kann auch angegeben werden:
    - `sysex` {{optional_inline}}
      - : Gibt an, ob Sie System-Exklusivnachrichten benötigen und/oder empfangen. Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das seinen Erfüllungshandler mit einem [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)-Objekt aufruft, das das Ergebnis der Anfrage anzeigt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Abrufen der `PermissionDescriptor`-Informationen ist auf irgendeine Weise fehlgeschlagen, oder die Berechtigung existiert nicht oder wird derzeit nicht unterstützt (z.B. `midi`, oder `push` mit `userVisibleOnly`).

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
