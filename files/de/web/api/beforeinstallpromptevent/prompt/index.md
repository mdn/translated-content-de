---
title: "BeforeInstallPromptEvent: prompt() Methode"
short-title: prompt()
slug: Web/API/BeforeInstallPromptEvent/prompt
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`prompt()`** Methode der {{domxref("BeforeInstallPromptEvent")}} Schnittstelle erlaubt es einem Entwickler, das Installationsfenster zu einem selbstgewählten Zeitpunkt anzuzeigen. Normalerweise wird dies im Ereignishandler für das benutzerdefinierte Installations-UI der App aufgerufen.

Diese Methode muss im Ereignishandler für eine Benutzeraktion (wie z.B. ein Klick auf einen Button) aufgerufen werden und darf nur einmal auf einer bestimmten Instanz von `BeforeInstallPromptEvent` aufgerufen werden.

## Syntax

```js-nolint
prompt()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Objekt zurückgibt, das die folgenden Eigenschaften enthält:

- `outcome` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der angibt, ob sich der Benutzer entschieden hat, die App zu installieren oder nicht. Es muss einer der folgenden Werte sein:
    - `"accepted"`: Der Benutzer hat die App installiert.
    - `"dismissed"`: Der Benutzer hat die App nicht installiert.

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : Wenn der Benutzer sich entschieden hat, die App zu installieren, ist dies ein String, der die ausgewählte Plattform benennt, eines der Werte aus der {{domxref("BeforeInstallPromptEvent.platforms")}} Eigenschaft. Wenn der Benutzer sich entschieden hat, die App nicht zu installieren, ist dies ein leerer String.

## Beispiele

Sehen Sie sich das [Beispiel für die `BeforeInstallPromptEvent` Schnittstelle](/de/docs/Web/API/BeforeInstallPromptEvent#examples) an.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [Wie Sie Ihr eigenes In-App-Installations-Erlebnis bieten können](https://web.dev/articles/customize-install) auf web.dev (2021)
