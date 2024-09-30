---
title: "BeforeInstallPromptEvent: userChoice-Eigenschaft"
short-title: userChoice
slug: Web/API/BeforeInstallPromptEvent/userChoice
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`userChoice`**-Eigenschaft des [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent)-Interfaces repräsentiert die Installationsentscheidung, die der Benutzer getroffen hat, als er aufgefordert wurde, die App zu installieren.

## Wert

Ein {{jsxref("Promise")}}, das ein Objekt mit zwei Eigenschaften zurückgibt:

- `outcome` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der angibt, ob der Benutzer sich entschieden hat, die App zu installieren oder nicht. Dieser muss einen der folgenden Werte annehmen:
    - `"accepted"`: Der Benutzer hat die App installiert.
    - `"dismissed"`: Der Benutzer hat die App nicht installiert.

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : Falls der Benutzer sich entschieden hat, die App zu installieren, ist dies ein String, der die ausgewählte Plattform benennt. Dieser ist einer der Werte aus der [`BeforeInstallPromptEvent.platforms`](/de/docs/Web/API/BeforeInstallPromptEvent/platforms)-Eigenschaft. Falls der Benutzer sich entschieden hat, die App nicht zu installieren, ist dies ein leerer String.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Progressive Web Apps installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [Anleitung zum Erstellen eines eigenen In-App-Installations-Erlebnisses](https://web.dev/articles/customize-install) auf web.dev (2021)
