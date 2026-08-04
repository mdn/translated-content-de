---
title: "LanguageModel: availability() statische Methode"
short-title: availability()
slug: Web/API/LanguageModel/availability_static
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`availability()`** statische Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel) Schnittstelle gibt einen Statusbezeichner zurück, der angibt, ob das Sprachmodell des Browsers einen bestimmten Satz von Konfigurationsoptionen unterstützt, ohne eine Sitzung zu erstellen oder einen Download auszulösen.

Verwenden Sie `availability()` bevor Sie [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static) aufrufen, um festzustellen, ob die gewünschte Konfiguration unterstützt wird. Dies verhindert, dass eine Sitzung gestartet wird, die dann fehlschlägt, und ermöglicht es Ihnen, den Nutzern eine sinnvolle Alternative anzubieten, wenn die Konfiguration nicht unterstützt wird.

## Syntax

```js-nolint
LanguageModel.availability()
LanguageModel.availability(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die Basiseinstellung darstellt, die verwendet wird, um die Unterstützung des Sprachmodells zu prüfen. Zu den Eigenschaften gehören:
    - `expectedInputs` {{optional_inline}}
      - : Ein Array von Objekten, das die erforderlichen Eingabemodalitäten und Sprachen repräsentiert.
        Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `type`
          - : Ein enumerierter Wert, der den Inhaltstyp angibt. Muss einer der folgenden sein:
            - `text`
              - : Reiner Textinhalt.
            - `image`
              - : Bildinhalt.
            - `audio`
              - : Audioinhalt.
            - `tool-call`
              - : Ein vom Modell erstellter Werkzeugaufruf.
            - `tool-response`
              - : Das Ergebnis eines Werkzeugaufrufs.
        - `languages` {{optional_inline}}
          - : Ein Array von Zeichenfolgen, das [BCP 47](https://www.rfc-editor.org/rfc/rfc5646) Sprachkennzeichnungen enthält (zum Beispiel `en`, `fr`, `ja`), die Sprachen repräsentieren, die die Sitzung verarbeiten soll. Der Benutzeragent verwendet diese Liste, um festzustellen, ob das Modell die angegebenen Sprachen unterstützt.
    - `expectedOutputs`
      - : Ein Array von Objekten, das die erforderlichen Ausgabemodalitäten und Sprachen repräsentiert.
        Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `type`
          - : Ein enumerierter Wert, der den Inhaltstyp angibt. Muss einer der folgenden sein:
            - `text`
              - : Textinhalt.
            - `image`
              - : Bildinhalt.
            - `audio`
              - : Audioinhalt.
            - `tool-call`
              - : Ein vom Modell erstellter Werkzeugaufruf.
            - `tool-response`
              - : Das Ergebnis eines Werkzeugaufrufs.
        - `languages` {{optional_inline}}
          - : Ein Array von Zeichenfolgen, das [BCP 47](https://www.rfc-editor.org/rfc/rfc5646) Sprachkennzeichnungen enthält (zum Beispiel `en`, `fr`, `ja`), die die Sitzung ausgeben soll.
    - `tools`
      - : Ein Array von Objekten, das verfügbare Werkzeuge für die KI repräsentiert.
        Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `name`
          - : Eine eindeutige Zeichenfolge, die dem Werkzeug einen Namen gibt, unter dem das Modell es bei einem Werkzeugaufruf referenziert.
        - `description`
          - : Eine Zeichenfolge, die beschreibt, was das Werkzeug tut.
            Das Modell verwendet diese Beschreibung, um zu entscheiden, wann und ob das Werkzeug aufgerufen wird.
        - `inputSchema`
          - : Ein Objekt, das ein [JSON Schema](https://json-schema.org/) enthält, das die Eingabeparameter des Werkzeugs beschreibt.
            Das Modell verwendet dieses Schema, um die Argumente zu erstellen, die es an die `execute` Funktion des Werkzeugs übergibt.
        - `execute`
          - : Eine Rückruffunktion, die der Benutzeragent aufruft, wenn das Modell dieses Werkzeug verwendet.
            Sie kann alle vom Modell bereitgestellten Argumente erhalten und gibt ein {{jsxref("Promise")}} zurück, das sich mit einer {{jsxref("String")}} auflöst, die das Ergebnis des Werkzeugs darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem der unten aufgeführten Werte auflöst.

- `available`
  - : Das Modell ist bereit, mit den gegebenen Optionen verwendet zu werden.
- `downloadable`
  - : Das Modell kann die gegebenen Optionen unterstützen, muss jedoch zusätzliche Daten herunterladen, um dies zu tun. Der Download hat noch nicht begonnen.
- `downloading`
  - : Das Modell kann die gegebenen Optionen mit einem zusätzlichen Daten-Download unterstützen. Der Download ist derzeit im Gange.
- `unavailable`
  - : Das Modell kann die gegebenen Optionen nicht unterstützen oder der Benutzeragent kann die Verfügbarkeit nicht bestimmen, beispielsweise aufgrund eines Fehlers bei der {{Glossary("Transient_activation", "temporären Aktivierung")}}. In diesem Fall sollte der Anrufer einen erneuten Versuch unternehmen oder auf eine alternative Implementierung zurückgreifen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aufrufende Dokument nicht vollständig aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert ist.

## Beispiele

Siehe auch [Verwendung der Prompt API > Prüfung der Konfigurationsunterstützung](/de/docs/Web/API/Prompt_API/Using#checking_configuration_support) und das [Vollständige Beispiel](/de/docs/Web/API/Prompt_API/Using#complete_example) auf derselben Seite.

### Unterstützung für Eingaben anfordern

Dieses Beispiel zeigt, wie ermittelt werden kann, ob Text- und Bildeingaben vom Modell unterstützt werden.

```js
const status = await LanguageModel.availability({
  expectedInputs: [{ type: "text" }, { type: "image" }],
});
```

### Verfügbarkeit für eine bestimmte Sprache prüfen

Dieses Beispiel testet, ob das Modell Englisch unterstützt, bevor es aufgefordert wird, japanischen Text ins Englische zu übersetzen.

```js
const status = await LanguageModel.availability({
  expectedInputs: [{ type: "text", languages: ["ja"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});

if (status === "available") {
  const session = await LanguageModel.create({
    expectedInputs: [{ type: "text", languages: ["ja"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });

  const translation = await session.prompt([
    {
      role: "user",
      content: "Translate the following text into English",
    },
    {
      role: "user",
      content: "桜はきれいです",
    },
  ]);

  console.log(translation);
}
```

### Verfügbarkeit für multimodale Eingaben prüfen

[Multimodale Eingaben](/de/docs/Web/API/Prompt_API/Multimodal) beschreiben Sitzungen, die mehr als einen Eingabetyp wie Text und Bilder verwenden können. Da die Verfügbarkeit von Eingabetypen je nach Sprachmodell variiert, sollte Ihr Code die Verfügbarkeit der gewünschten Modi prüfen, bevor eine Sitzung erstellt wird. Ein Beispiel wird hier gezeigt.

```js
const availability = await LanguageModel.availability({
  expectedInputs: [{ type: "text" }, { type: "image" }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});

if (availability === "unavailable") {
  console.warn("This configuration is not supported.");
} else {
  const session = await LanguageModel.create({
    expectedInputs: [{ type: "text" }, { type: "image" }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)
