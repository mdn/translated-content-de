---
title: "BeforeInstallPromptEvent: BeforeInstallPromptEvent() Konstruktor"
short-title: BeforeInstallPromptEvent()
slug: Web/API/BeforeInstallPromptEvent/BeforeInstallPromptEvent
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

Der **`BeforeInstallPromptEvent()`** Konstruktor erstellt ein neues {{domxref("BeforeInstallPromptEvent")}} Objekt.

## Syntax

```js-nolint
new BeforeInstallPromptEvent(type)
new BeforeInstallPromptEvent(type, eventInitDict)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses, gesetzt auf `beforeinstallpromptevent`.
- `eventInitDict` {{optional_inline}}
  - : Ein Objekt mit einer einzigen optionalen Eigenschaft `platforms`, die ein Array von Strings ist und die Plattformen auflistet, auf denen das Ereignis ausgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [PWA installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [Wie Sie Ihre eigene In-App-Installations-Erfahrung bieten können](https://web.dev/articles/customize-install) auf web.dev (2021)
