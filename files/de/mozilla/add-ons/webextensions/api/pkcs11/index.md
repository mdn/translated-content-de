---
title: pkcs11
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die `pkcs11` API ermöglicht einer Erweiterung, [PKCS #11](https://en.wikipedia.org/wiki/PKCS_11)-Sicherheitsmodule aufzulisten und sie dem Browser als Quellen für Schlüssel und Zertifikate zugänglich zu machen.

Um diese API zu verwenden, benötigen Sie die "pkcs11"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Verwendung des Firefox-Einstellungsdialogs zur Installation von PKCS #11 Modulen

Führen Sie die folgenden Schritte aus:

1. Speichern Sie das PKCS #11-Modul an einem permanenten Ort auf Ihrem lokalen Computer.
2. Wählen Sie **Extras > Optionen** oder wählen Sie das **Firefox-Menü** und dann **Optionen**.
3. Sobald die Optionsseite geöffnet ist, wählen Sie **Datenschutz & Sicherheit**.
4. Scrollen Sie bis zum Ende der Seite und klicken oder tippen Sie unter **Zertifikate** auf **Sicherheitsgeräte…**.
   ![Sicherheitsmodule und Geräte](device_manager.png)
5. Klicken oder tippen Sie auf die Schaltfläche **Laden**.
   ![PKCS#11-Gerätetreiber laden](load_device_driver.png)
6. Geben Sie einen Namen für das Sicherheitsmodul ein, wie z.B. "_Meine Client-Datenbank_".

   > [!WARNING]
   > Seien Sie vorsichtig beim Verwenden internationaler Zeichen, da es derzeit einen Fehler in Firefox gibt, bei dem internationale Zeichen Probleme verursachen können.

7. Wählen Sie **Durchsuchen…**, um den Speicherort des PKCS #11-Moduls auf Ihrem lokalen Computer zu finden, und klicken oder tippen Sie dann auf **OK**, um zu bestätigen.

## Bereitstellung von PKCS #11 Modulen

> [!NOTE]
> Ab Firefox 58 können Erweiterungen diese API verwenden, um PKCS #11-Module aufzulisten und sie dem Browser als Quellen für Schlüssel und Zertifikate zugänglich zu machen.

Es gibt zwei Umgebungsanforderungen für die Verwendung dieser **API**:

- Ein oder mehrere `PKCS #11`-Module müssen auf dem Computer des Benutzers installiert sein.
- Für jedes installierte `PKCS #11`-Modul muss eine [native Manifestdatei](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests) vorhanden sein, die dem Browser ermöglicht, das Modul zu finden.

Wahrscheinlich würde der Benutzer oder Geräteadministrator das `PKCS #11`-Modul installieren, und dessen Installationsprogramm würde gleichzeitig die native Manifestdatei installieren.

Das Modul und Manifest können jedoch nicht als Teil des Installationsprozesses der Erweiterung installiert werden.

Für Details zum Inhalt und Ort der Manifestdatei, siehe [Native Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

## Funktionen

- {{WebExtAPIRef("pkcs11.getModuleSlots()")}}
  - : Für jeden Slot in einem Modul erhalten Sie dessen Namen und ob er ein Token enthält.
- {{WebExtAPIRef("pkcs11.installModule()")}}
  - : Installiert das benannte PKCS #11-Modul.
- {{WebExtAPIRef("pkcs11.isModuleInstalled()")}}
  - : Überprüft, ob das benannte PKCS #11-Modul installiert ist.
- {{WebExtAPIRef("pkcs11.uninstallModule()")}}
  - : Deinstalliert das benannte PKCS #11-Modul.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
