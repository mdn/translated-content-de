---
title: "*_localized"
slug: Web/Progressive_web_apps/Manifest/Reference/*_localized
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

{{SeeCompatTable}}

Das Suffix `_localized` wird zu Manifest-Mitgliedern hinzugefügt, um lokalisierte Varianten dieser Mitglieder zu erstellen. Der Browser verwendet die Variante, die am besten zu den Spracheinstellungen des Benutzers im Browser passt.

## Syntax

```json-nolint
/* Localized text values */
"member_localized": {
  "lang1": text_l10n,
  "lang2": text_l10n,
  "langN": text_l10n,
}

/* Localized icon resources */
"member_localized": {
  "lang1": icon_l10n,
  "lang2": icon_l10n,
  "langN": icon_l10n,
}
```

### Werte

- `member_localized`:
  - : Ein Objekt, das lokalisierte Mitgliedervarianten angibt. Zum Beispiel würde `name_localized` lokalisierte Varianten für das [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)-Feld angeben.
    - `lang1` ... `lang2` ... `langN`
      - : Jedes Objekt enthält ein oder mehrere Eigenschaften mit Schlüsseln, die einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}} entsprechen und eine Sprache zur Bereitstellung einer Variante repräsentieren. Die Eigenschaftswerte können zwei Typen annehmen:
        - `text_l10n`
          - : Ein Objekt oder ein String, der eine Textlokalisierung enthält; siehe [Textlokalisierung](#textlokalisierung).
        - `icon_l10n`
          - : Ein Array von Objekten, das Referenzen zu lokalisierten Icons-Ressourcen enthält; siehe [Icon-Lokalisierung](#icon-lokalisierung).

#### Textlokalisierung

Wenn die lokalisierte Variante eine Lokalisierung eines Textwertes bietet, können die Eigenschaftswerte Objekte oder Strings sein.

Die Objektrepräsentation kann die folgenden Eigenschaften haben:

- `value`
  - : Ein String, der den lokalisierten Text enthält.
- `dir` {{optional_inline}}
  - : Ein String, der die Leserichtung des lokalisierten Textes repräsentiert. Gültige Werte für `dir` sind:
    - `auto`
      - : Der Standardwert. Gibt an, dass die Leserichtung unbekannt ist. Die Richtung wird aus den Spracheinstellungen des Browsers abgeleitet.
    - `ltr`
      - : Gibt eine Leserichtung von links nach rechts an.
    - `rtl`
      - : Gibt eine Leserichtung von rechts nach links an.
- `lang` {{optional_inline}}
  - : Ein String, der einen BCP 47-Sprachtag enthält und eine Locale für den lokalisierten Text repräsentiert.

In den meisten Fällen kann die abgekürzte String-Repräsentation verwendet werden, die den lokalen Text `value` enthält. Die Objektform wird nur benötigt, wenn Sie eine andere Leserichtung als die Standardsprache des Browsers angeben möchten oder der lokalisierte Text in einer anderen Sprache als der Locale des Benutzers dargestellt werden muss.

#### Icon-Lokalisierung

Die Eigenschaftswerte des `icons_localized`-Mitgliedobjekts sind Arrays, die ein oder mehrere Objekte enthalten, die lokalisierte Icon-Optionen darstellen.

Jedes Objekt enthält die gleichen Eigenschaften wie das nicht lokalisierte [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)-Mitglied: `src`, `sizes`, `type`, und `purpose`.

#### Shortcut-Lokalisierung

Das [`shortcuts`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)-Mitglied kann lokalisiert werden, jedoch nicht durch Angabe eines `shortcuts_localized`-Mitglieds. Stattdessen geben Sie `*_localized`-Versionen der Mitglieder `name`, `short_name`, `description` und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) an, die innerhalb des `shortcut`-Mitglieds verschachtelt sind.

## Beschreibung

Das Suffix `_localized` wird verwendet, um lokalisierte Manifeste zu erstellen.

Sie können das `_localized`-Suffix zu einem unterstützenden Manifestmitglied hinzufügen, um lokalisierte Varianten dieses Mitglieds zu erstellen. Der Browser verwendet die Variante, die am besten zu den Spracheinstellungen des Benutzers im Browser passt. Jede Eigenschaft einer lokalisierten Variante hat einen Schlüssel, der einem BCP47-Sprachtag entspricht und die Sprache der Locale repräsentiert, sowie einen Wert, der die lokalisierte Variante darstellt.

Wenn einer der Schlüssel den Spracheinstellungen des Browsers des Benutzers entspricht, wird diese Variante verwendet. Wenn nicht, wird der nicht vorgestellte Manifestmitgliedwert verwendet.

> [!NOTE]
> In Fällen, in denen mehrere verwandte Sprachvarianten angegeben sind, gleicht der Browser zuerst die granulareren Sprach-Tags ab, bevor er zu allgemeineren Tags zurückfällt. Zum Beispiel, wenn die Browsersprache des Benutzers auf `fr-CA` eingestellt ist, sucht er zuerst nach einer Variante mit dem Sprach-Tag `fr-CA` und fällt dann auf eine `fr`-Variante zurück, wenn `fr-CA` nicht verfügbar ist. Wenn keine von beiden verfügbar ist, fällt er auf den nicht lokalisierten Wert zurück. Siehe [Eine App manifestieren lokalisieren](/de/docs/Web/Progressive_web_apps/How_to/Localize_an_app_manifest) für ein Beispiel.

Mitglieder, für die lokalisierte Varianten unterstützt werden (sowohl auf oberster Manifestebene als auch innerhalb des [`shortcuts`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)-Mitglieds):

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)

### Lokalisierter Text

Lokalisierte Textfeldeigenschaften haben Werte, die gleich Objekten oder Strings sind; die Stringform ist bei weitem die häufigste.

Zum Beispiel:

```json
{
  ...
  "name": "The SuperSausage sausage app",
  "name_localized": {
    "fr": "L'application de saucisse SuperSausage",
    "de": "Die SuperWurst-App",
    "ur":  "سپر ساسیج ساسیج ایپ",
    "ja": "スーパーソーセージのソーセージアプリ"
  }
  ...
}
```

Wenn der Benutzer die Browsersprache auf `fr`, `de`, `ur` oder `ja` eingestellt hat, verwendet der Browser den entsprechenden, im `name_localized`-Mitglied für diese Sprache gefundenen Namen als `name` der App. Wenn nicht, wird der im `name`-Mitglied gefundene Name verwendet.

Manchmal möchten Sie einen anderen `lang`-Wert innerhalb einer lokalisierten Variante angeben als die tatsächliche Sprache dieser Variante. Zum Beispiel:

```json
}
  ...
  "short_name": "SuperSausage",
  "short_name_localized": {
    "fr": {
      "lang": "en-US",
      "value": "Sausage Super"
    },
    "de": "SuperWurst",
    "ur": "سپر ساسیج",
    "ja": "スーパーソーセージ"
  },
  ...
}
```

In diesem Fall kennt unser französisches Publikum unsere App unter einem abgewandelten englischen Markennamen – "Sausage Super" – und wir möchten angeben, dass dies als Englisch statt Französisch behandelt werden soll (zum Beispiel für Aussprachezwecke). Dies geschieht, indem ein `lang`-Wert von `en-US` innerhalb der Variante angegeben wird.

### Lokalisierte Icons

Ein lokalisierter `icons`-Satz besteht aus einem Objekt, das mehrere Arrays enthält, von denen jedes Objekte enthält, die die Icon-Optionen für eine andere Locale darstellen:

```json
{
  "icons": [
    {
      "src": "./icons/icon-128.png",
      "sizes": "128x128",
      "type": "image/png"
    }
  ],
  "icons_localized": {
    "de": [
      {
        "src": "./icons/localized_icons/de/icon-128.png",
        "sizes": "128x128",
        "type": "image/png"
      }
    ],
    "ar": [
      {
        "src": "./icons/localized_icons/ar/icon-128.png",
        "sizes": "128x128",
        "type": "image/png"
      }
    ],
    "fr": [
      {
        "src": "./icons/localized_icons/fr/icon-128.png",
        "sizes": "128x128",
        "type": "image/png"
      }
    ]
  }
}
```

Wenn der Benutzer die Browsersprache auf `de`, `ar` oder `fr` eingestellt hat, wird ein entsprechender Eintrag aus dem `icons_localized`-Mitglied verwendet. Wenn nicht, wird das im `icons`-Mitglied referenzierte Icon verwendet.

Jedes lokalisierte Icons-Array wird als vollständig unabhängig von allen anderen behandelt. Wenn eine Icons-Variante mit den Spracheinstellungen des Browsers des Benutzers übereinstimmt, werden nur Icons aus dieser Variante für diesen Benutzer ausgewählt. Zum Beispiel, wenn Sie 20 Icons innerhalb von `icons` angegeben haben und nur ein Icon innerhalb von `icons_localized.fr`, sehen Benutzer mit `fr` als Browsersprache stets nur ein überall verwendetes Icon. Der Browser wird nicht im `icons`-Array nach passenderen Größen suchen.

### Lokalisierte Shortcuts

Lokalisierte Shortcut-Sub-Mitglieder werden innerhalb des `shortcuts`-Mitglieds bereitgestellt.

Zum Beispiel:

```json
"shortcuts": [
  {
    "name": "Open dashboard",
    "name_localized": {
      "en": "Open dashboard",
      "de": "Dashboard öffnen",
      "ar": "فتح لوحة المعلومات"
    },
    "short_name": "Dashboard",
    "short_name_localized": {
      "en": "Dashboard",
      "de": "Dashboard",
      "ar": "لوحة"
    },
    "description": "Go to your dashboard.",
    "description_localized": {
      "en": "Go to your dashboard.",
      "de": "Zum Dashboard wechseln.",
      "ar": "انتقل إلى لوحتك."
    },
    "url": "./dashboard",
    "icons": [
      { "src": "./icons/shortcut-dashboard.png", "sizes": "96x96", "type": "image/png", "purpose": "any" }
    ],
    "icons_localized": {
      "en": [
        { "src": "./icons/icon-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "de": [
        { "src": "./icons/localized_icons/de/Iconka-Meow-Cat-purr.128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "ar": [
        { "src": "./icons/localized_icons/ar/black_cat-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ]
    }
  }
],
```

## Beispiele

Für Beispiele, schauen Sie sich Folgendes an:

- Die [PWA-Manifest-Lokalisierungsdemo](https://microsoftedge.github.io/Demos/pwa-manifest-localization/) App ([Quellcode ansehen](https://github.com/MicrosoftEdge/Demos/tree/main/pwa-manifest-localization/)).
- Unseren [Eine App manifestieren lokalisieren](/de/docs/Web/Progressive_web_apps/How_to/Localize_an_app_manifest) Anleitung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eine App manifestieren lokalisieren](/de/docs/Web/Progressive_web_apps/How_to/Localize_an_app_manifest)
- [Lokalisierungsunterstützung für Web-App-Manifeste](https://developer.chrome.com/blog/manifest-localization) auf developer.chrome.com (2026)
