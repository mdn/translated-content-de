---
title: "BeforeInstallPromptEvent: prompt() Methode"
short-title: prompt()
slug: Web/API/BeforeInstallPromptEvent/prompt
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`prompt()`**-Methode der [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent) Schnittstelle ermöglicht es einem Entwickler, das Installationsfenster zu einem selbst gewählten Zeitpunkt anzuzeigen. Typischerweise wird dies im Ereignishandler für das benutzerdefinierte Installations-UI der App aufgerufen.

Diese Methode muss im Ereignishandler für eine Benutzeraktion (wie z.B. einen Klick auf einen Button) aufgerufen werden und darf nur einmal für eine gegebene Instanz von `BeforeInstallPromptEvent` aufgerufen werden.

## Syntax

```js-nolint
prompt()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Objekt aufgelöst wird, das die folgenden Eigenschaften enthält:

- `outcome` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der angibt, ob der Benutzer sich entschieden hat, die Anwendung zu installieren oder nicht. Er muss einen der folgenden Werte haben:
    - `"accepted"`: Der Benutzer hat die App installiert.
    - `"dismissed"`: Der Benutzer hat die App nicht installiert.

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : Wenn der Benutzer sich entschieden hat, die App zu installieren, ist dies ein String, der die ausgewählte Plattform benennt. Es ist einer der Werte aus der [`BeforeInstallPromptEvent.platforms`](/de/docs/Web/API/BeforeInstallPromptEvent/platforms) Eigenschaft. Wenn der Benutzer sich entschieden hat, die App nicht zu installieren, ist dies ein leerer String.

## Beispiele

Siehe das [Beispiel für die `BeforeInstallPromptEvent` Schnittstelle](/de/docs/Web/API/BeforeInstallPromptEvent#examples).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Making PWAs installable](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [Anleitung zur Bereitstellung einer eigenen In-App-Installationsmöglichkeit](https://web.dev/articles/customize-install) auf web.dev (2021)
