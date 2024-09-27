---
title: "BeforeInstallPromptEvent: userChoice-Eigenschaft"
short-title: userChoice
slug: Web/API/BeforeInstallPromptEvent/userChoice
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`userChoice`**-Eigenschaft der Schnittstelle [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent) repräsentiert die Installationsentscheidung, die der Benutzer getroffen hat, als er aufgefordert wurde, die App zu installieren.

## Wert

Ein {{jsxref("Promise")}}, das zu einem Objekt auflöst, das zwei Eigenschaften enthält:

- `outcome` {{experimental_inline}} {{non-standard_inline}}

  - : Ein String, der angibt, ob der Benutzer sich entschieden hat, die App zu installieren oder nicht. Es muss einer der folgenden Werte sein:
    - `"accepted"`: Der Benutzer hat die App installiert.
    - `"dismissed"`: Der Benutzer hat die App nicht installiert.

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : Wenn der Benutzer sich entschieden hat, die App zu installieren, ist dies ein String, der die ausgewählte Plattform benennt. Dieser Wert ist einer der Werte aus der Eigenschaft [`BeforeInstallPromptEvent.platforms`](/de/docs/Web/API/BeforeInstallPromptEvent/platforms). Wenn der Benutzer sich entschieden hat, die App nicht zu installieren, ist dies ein leerer String.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [Wie Sie Ihre eigene In-App-Installations-Erfahrung bereitstellen](https://web.dev/articles/customize-install) auf web.dev (2021)
