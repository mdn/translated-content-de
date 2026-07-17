---
title: Lokalisierung eines App-Manifests
slug: Web/Progressive_web_apps/How_to/Localize_an_app_manifest
l10n:
  sourceCommit: 429a5b3c0a9363f7f9c700d56380af6226d2348f
---

Durch die Lokalisierung des Manifests einer [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps) kann der Browser zwischen verschiedenen Textstrings und Icons wählen, wenn eine App geladen wird, um die Lokalisierungspräferenzen des Benutzers bestmöglich zu berücksichtigen, basierend auf den Spracheinstellungen des Browsers. Manifeste können durch lokalisierbare Mitglieder lokalisiert werden, die das Suffix [`_localized`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) haben.

Dieser Leitfaden zeigt, wie ein PWA-Manifest lokalisiert werden kann.

## Beispiel einer nicht lokalisierten PWA

Dieser Leitfaden entwickelt ein mehrsprachiges PWA-Manifest mit folgendem Beispiel als Ausgangspunkt.

```json
{
  "name": "The SuperSausage sausage app",
  "short_name": "SuperSausage",
  "description": "Find information on all your favorite sausages!",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ab510d",
  "icons": [
    {
      "src": "./icons/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "shortcuts": [
    {
      "name": "Open menu",
      "short_name": "Menu",
      "description": "Go to the menu.",
      "url": "./menu",
      "icons": [
        {
          "src": "./icons/menu-128.png",
          "sizes": "128x128",
          "type": "image/png",
          "purpose": "any"
        }
      ]
    }
  ]
}
```

## Wählen Sie die Manifest-Mitglieder, die Sie lokalisieren möchten

Die folgenden Mitglieder unterstützen lokalisierte Varianten:

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)
- [`shortcuts`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)

Unser Beispielmanifest enthält alle diese; wir werden zeigen, wie jedes lokalisiert wird.

## Wählen Sie die Sprachen, die Sie unterstützen möchten

Im Allgemeinen sollten Sie alle Sprachen unterstützen, die für die Hauptzielländer Ihrer Zielgruppe relevant sind.

Für dieses Beispiel wählen wir Französisch (`fr`), Kanadisch-Französisch (`fr-CA`), Deutsch (`de`), Urdu (`ur`) und Japanisch (`ja`).

## Lokalisierung des `name`-Mitglieds

Lokalisierte Versionen des `name`-Mitglieds sind im `name_localized`-Mitglied enthalten. Jede Eigenschaft innerhalb von `name_localized` muss einen Schlüssel haben, der einem der {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tags")}} der Zielsprache entspricht, und einen Wert, der gleich einem Objekt oder String ist, der den lokalisierten Text für diese Sprache darstellt.

Schauen wir uns an, wie das für unser Beispiel aussehen könnte:

```json
"name_localized": {
  "fr": "L'application de saucisse SuperSausage",
  "de": "Die SuperWurst-App",
  "ur": "سپر ساسیج ساسیج ایپ",
  "ja": "スーパーソーセージのソーセージアプリ"
}
```

Wenn der Benutzer seine Browsersprache auf `fr`, `de`, `ur` oder `ja` eingestellt hat, verwendet der Browser den entsprechenden Namen, der im `name_localized`-Mitglied für diese Sprache gefunden wird, als `name` der App. Andernfalls verwendet der Browser den im `name`-Mitglied gefundenen Namen.

Kanadische Französisch-Nutzer, die ihre Browsersprache speziell auf `fr-CA` eingestellt haben, sehen die `fr`-Variante verwendet. Dies liegt daran, dass der Browser, wenn mehrere verwandte Sprachvarianten angegeben sind, zuerst genauere Sprach-Tags abgleicht, bevor er auf allgemeinere Tags zurückfällt. In diesem Fall wird keine `fr-CA`-Variante bereitgestellt, daher fällt der Browser für diese Benutzer auf `fr` zurück.

## Lokalisierung der anderen textbasierten Mitglieder

Wir können das gleiche Muster wie beim `name`-Mitglied verwenden, um die `short_name`- und `description`-Mitglieder zu lokalisieren:

```json
"short_name_localized": {
  "fr": {
    "lang": "en-US",
    "value": "Sausage Super"
  },
  "de": "SuperWurst",
  "ur": "سپر ساسیج",
  "ja": "スーパーソーセージ"
},
"description_localized": {
  "fr": "Trouvez des informations sur toutes vos saucisses préférées!",
  "de": "Finden Sie Informationen zu all Ihren Lieblingswürstchen!",
  "ur": "اپنی تمام پسندیدہ ساسیجز کے بارے میں معلومات حاصل کریں!",
  "ja": "お気に入りのソーセージの情報を全部見つけましょう!"
},
```

Die französische (`fr`) Übersetzung des `short_name`-Mitglieds zeigt die typische Verwendung der Objektwertform mit einer angegebenen `lang`-Eigenschaft. In diesem Fall kennt unser französisches Publikum unsere App unter einem abgewandelten englischen Markennamen – "Sausage Super" – und wir möchten angeben, dass dies als Englisch und nicht als Französisch behandelt werden sollte (zum Beispiel für Aussprachezwecke).

## Lokalisierung des `icons`-Mitglieds

Die Eigenschaften jedes `icons_localized`-Mitglieds entsprechen einem Array von Objekten, die die gleichen Eigenschaften wie das nicht lokalisierte `icons`-Mitglied enthalten; jedes bietet Details für ein lokalisiertes Icon.

Schauen wir uns an, wie das aussehen könnte:

```json
"icons_localized": {
  "fr": [
    {
      "src": "./icons/l10n/fr/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/fr/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "fr-CA": [
    {
      "src": "./icons/l10n/fr-CA/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/fr-CA/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "de": [
    {
      "src": "./icons/l10n/de/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/de/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "ur": [
    {
      "src": "./icons/l10n/ur/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/ur/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "ja": [
    {
      "src": "./icons/l10n/ja/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/ja/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
}
```

In diesem Fall haben wir eine spezifische Variante für kanadische Französisch-Nutzer bereitgestellt — die `fr`-Textvarianten sind möglicherweise sowohl für `fr`- als auch `fr-CA`-Nutzer geeignet, aber es ist eine gute Idee, ein explizites Icon bereitzustellen, das besser zur kanadischen Lokalisierung passt. In diesem Fall sehen Benutzer, die ihre Browsersprache speziell auf `fr-CA` eingestellt haben, das `fr-CA`-Icon, während Benutzer, die `fr` als Sprache eingestellt haben, das `fr`-Icon sehen.

## Lokalisierung des `shortcuts`-Mitglieds

Im Fall des `shortcuts`-Mitglieds geben Sie die Lokalisierungen nicht in einem `shortcuts_localized`-Mitglied an. Stattdessen stellen Sie `*_localized`-Versionen der `name`, `short_name`, `description` und `icons`-Mitglieder bereit, die im `shortcut`-Mitglied verschachtelt sind.

Für unser Beispiel könnte das so aussehen:

```json
"shortcuts": [
  {
    "name": "Open menu",
    "name_localized": {
      "fr": "Menu ouvert",
      "de": "Menü öffnen",
      "ur": "اوپن مینو",
      "ja": "メニューを開く"
    },
    "short_name": "Menu",
    "short_name_localized": {
      "fr": "Menu",
      "de": "Speisekarte",
      "ur": "مینو",
      "ja": "メニュー"
    },
    "description": "Go to the menu.",
    "description_localized": {
      "fr": "Allez au menu.",
      "de": "Geh zur Speisekarte.",
      "ur": "مینو پر جائیں۔",
      "ja": "メニューに行け。"
    },
    "url": "./menu",
    "icons": [
      { "src": "./icons/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
    ],
    "icons_localized": {
      "fr": [
        { "src": "./icons/l10n/fr/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "de": [
        { "src": "./icons/l10n/de/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "ur": [
        { "src": "./icons/l10n/ur/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "ja": [
        { "src": "./icons/l10n/ja/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ]
    }
  }
]
```

## Fertiges Manifest

Wenn man das alles zusammenfügt, sieht das komplette Manifest so aus:

```json
{
  "name": "The SuperSausage sausage app",
  "short_name": "SuperSausage",
  "description": "Find information on all your favorite sausages!",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ab510d",
  "icons": [
    {
      "src": "./icons/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "name_localized": {
    "fr": "L'application de saucisse SuperSausage",
    "de": "Die SuperWurst-App",
    "ur": "سپر ساسیج ساسیج ایپ",
    "ja": "スーパーソーセージのソーセージアプリ"
  },
  "short_name_localized": {
    "fr": {
      "lang": "en-US",
      "value": "Sausage Super"
    },
    "de": "SuperWurst",
    "ur": "سپر ساسیج",
    "ja": "スーパーソーセージ"
  },
  "description_localized": {
    "fr": "Trouvez des informations sur toutes vos saucisses préférées !",
    "de": "Finden Sie Informationen zu all Ihren Lieblingswürstchen!",
    "ur": "اپنی تمام پسندیدہ ساسیجز کے بارے میں معلومات حاصل کریں!",
    "ja": "お気に入りのソーセージの情報を全部見つけましょう!"
  },
  "icons_localized": {
    "fr": [
      {
        "src": "./icons/l10n/fr/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/fr/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ],
    "fr-CA": [
      {
        "src": "./icons/l10n/fr-CA/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/fr-CA/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ],
    "de": [
      {
        "src": "./icons/l10n/de/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/de/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ],
    "ur": [
      {
        "src": "./icons/l10n/ur/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/ur/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ],
    "ja": [
      {
        "src": "./icons/l10n/ja/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/ja/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ]
  },
  "shortcuts": [
    {
      "name": "Open menu",
      "name_localized": {
        "fr": "Menu ouvert",
        "de": "Menü öffnen",
        "ur": "اوپن مینو",
        "ja": "メニューを開く"
      },
      "short_name": "Menu",
      "short_name_localized": {
        "fr": "Menu",
        "de": "Speisekarte",
        "ur": "مینو",
        "ja": "メニュー"
      },
      "description": "Go to the menu.",
      "description_localized": {
        "fr": "Allez au menu.",
        "de": "Geh zur Speisekarte.",
        "ur": "مینو پر جائیں۔",
        "ja": "メニューに行け。"
      },
      "url": "./menu",
      "icons": [
        {
          "src": "./icons/menu-128.png",
          "sizes": "128x128",
          "type": "image/png",
          "purpose": "any"
        }
      ],
      "icons_localized": {
        "fr": [
          {
            "src": "./icons/l10n/fr/menu-128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        "de": [
          {
            "src": "./icons/l10n/de/menu-128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        "ur": [
          {
            "src": "./icons/l10n/ur/menu-128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        "ja": [
          {
            "src": "./icons/l10n/ja/menu-128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "any"
          }
        ]
      }
    }
  ]
}
```

## Siehe auch

- [`*_localized`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) Manifest-Mitglieder
- [Lokalisierungsunterstützung für Web-App-Manifeste](https://developer.chrome.com/blog/manifest-localization) auf developer.chrome.com (2026)
