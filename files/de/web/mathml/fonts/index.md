---
title: Fonts für MathML
slug: Web/MathML/Fonts
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{MathMLRef}}

Für eine gute mathematische Darstellung sind Fonts mit angemessener Unicode-Abdeckung und Open Font Format-Funktionen erforderlich. Diese Seite beschreibt, wie Benutzer solche mathematischen Fonts installieren können, um MathML korrekt in Browsern darzustellen.

## Installationsanweisungen

Als Faustregel empfiehlt es sich, sowohl _Latin Modern Math_ (das den [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern)-Stil verwendet, der bei mathematischen Formeln beliebt ist) als auch _STIX Two Math_ (das eine große Unicode-Abdeckung für wissenschaftliche Zeichen hat) zu installieren. In den folgenden Abschnitten finden Sie detaillierte Anweisungen zur Installation dieser Schriftarten in verschiedenen Betriebssystemen.

### Windows

Installieren Sie die Fonts _Latin Modern Math_ und _STIX Two Math_ wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Öffnen Sie das ZIP-Archiv, gehen Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Sie finden dort die Fontdatei `latinmodern-math`.
3. Öffnen Sie die `latinmodern-math` Fontdatei und klicken Sie auf die Schaltfläche **Installieren**.
4. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
5. Öffnen Sie das ZIP-Archiv `static_otf.zip`, und gehen Sie dann in das Verzeichnis `static_otf`. Unter den Dateien finden Sie `STIXTwoMath-Regular`.
6. Öffnen Sie die Datei `STIXTwoMath-Regular` und klicken Sie auf die Schaltfläche **Installieren**. Falls gewünscht, können Sie dasselbe auch für die anderen Fontdateien im Verzeichnis tun.

> **Note:** _Cambria Math_ ist standardmäßig auf Windows installiert und sollte eine relativ gute MathML-Darstellung gewährleisten.

### macOS

Installieren Sie den _Latin Modern Math_ Font wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Extrahieren Sie das ZIP-Archiv, gehen Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Sie finden dort die Fontdatei `latinmodern-math`.
3. Doppelklicken Sie auf die Fontdatei `latinmodern-math` und klicken Sie auf die Schaltfläche **Schriftart installieren** im geöffneten Fenster.

> [!NOTE]
> Wenn Sie macOS Ventura (Version 13) oder höher verwenden, ist _STIX Two Math_ bereits vorinstalliert, und Sie können die folgenden Schritte überspringen.

Installieren Sie den _STIX Two Math_ Font wie folgt:

1. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Öffnen Sie das ZIP-Archiv `static_otf.zip`, und gehen Sie dann in das Verzeichnis `static_otf`. Unter den Dateien finden Sie `STIXTwoMath-Regular.otf`.
3. Öffnen Sie die Datei `STIXTwoMath-Regular.otf` und klicken Sie auf die Schaltfläche **Schriftart installieren** im geöffneten Fenster. Falls gewünscht, können Sie dasselbe auch für die anderen Fontdateien im Verzeichnis tun.

> [!NOTE]
> Eine veraltete Version von _STIX_ ist ab OS X Lion (Version 10.7) vorinstalliert. Obwohl einige Browser diese nutzen können, wird dringend empfohlen, die obigen Anweisungen für eine optimale mathematische Darstellung zu befolgen.

### Linux

Im Folgenden finden Sie Befehle, die Sie auf beliebten Linux-Distributionen ausführen können, um die Fonts _Latin Modern Math_ und _STIX Two Math_ über Ihren Paketmanager zu installieren. Alternative Ansätze werden ebenfalls geboten, falls Ihre Linux-Distribution keine dedizierten Pakete für diese Schriftarten bereitstellt.

#### Debian-basierte Distributionen (inklusive Ubuntu und Mint)

```bash
sudo apt-get install fonts-lmodern fonts-stix
```

#### Fedora-basierte Distributionen

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

#### openSUSE-basierte Distributionen

```bash
sudo zypper install texlive-lm-math stix-fonts
```

#### Arch Linux

```bash
sudo pacman -S otf-latinmodern-math otf-stix
```

#### TeXLive-Pakete

Wenn Ihre Linux-Distribution keine Pakete für die _Latin Modern Math_ und _STIX_ Schriftarten bereitstellt, ziehen Sie in Betracht, stattdessen die `texlive` Pakete zu installieren, die die _Latin Modern Math_ und _XITS_ Schriften enthalten. Zum Beispiel auf Mageia:

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

Allerdings müssen Sie wahrscheinlich sicherstellen, dass diese Fonts von Ihrem System erkannt werden. Fügen Sie eine fontconfig-Konfiguration `/etc/fonts/conf.avail/09-texlive-fonts.conf` hinzu, die auf das `opentype` Verzeichnis von TeXLive verweist, wie etwa:

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

Fügen Sie schließlich diese Konfigurationsdatei zur Liste der System-Fontstandorte hinzu und regenerieren Sie den fontconfig-Cache:

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### Upstream-Pakete

Falls keine Pakete auf Ihrer Linux-Distribution verfügbar sind oder wenn Sie einfach Upstream-Pakete installieren möchten, versuchen Sie Folgendes:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Erstellen Sie einen Ordner `~/.fonts`, falls dieser noch nicht existiert, und platzieren Sie `latinmodern-math.otf` und `STIXTwoMath-Regular.otf` in diesem Verzeichnis.
3. Führen Sie `fc-cache -f` aus, um den fontconfig-Cache zu regenerieren.

### Android

Sie müssen das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) verwenden.

> [!NOTE]
> Noto Sans Math bietet eine gute Unicode-Abdeckung für mathematische Symbole und [Google plant, Unterstützung für mathematische Layout-Funktionen hinzuzufügen](https://github.com/notofonts/math/issues/14#issuecomment-1161414446).

### Andere Systeme

Auf anderen Systemen ziehen Sie in Betracht, eine [Schriftart mit einer MATH-Tabelle](#schriften_mit_einer_math-tabelle) unter Verwendung Ihres Paketmanagers zu installieren. Beachten Sie, dass diese Schriftarten in der Regel mit TeX-Distributionen wie [TeX Live](https://www.tug.org/texlive/) geliefert werden, Sie müssen jedoch möglicherweise spezifischen Anweisungen folgen, damit Ihr System die Schriftarten erkennt. Als letzte Lösung installieren Sie das [MathML fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/).

## Erweiterte Einrichtung

In den nächsten Abschnitten finden Sie weitere nützliche Tipps zur Installation und Konfiguration von Schriftarten für MathML.

### Arabische mathematische alphabetische Symbole

Derzeit haben nur sehr wenige Schriftarten geeignete Glyphen für die arabischen mathematischen alphabetischen Symbole. Wenn Sie wahrscheinlich diese Zeichen benötigen, empfehlen wir die Installation der _XITS_ oder [Amiri](https://www.amirifont.org/) Fonts.

### Installation ohne Administratorrechte

Wenn Sie Schriftarten auf einem System ohne Administratorrechte installieren müssen, ist die einfachste Option, die [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) zu verwenden. Beachten Sie, dass die Verwendung des Add-ons nicht optimal ist, da es Ihren Gecko-Browser dazu zwingt, ein CSS-Stylesheet auf jeder besuchten Seite sowie Web-Schriftarten auf allen Seiten mit MathML-Inhalt zu laden.

Eine bessere Alternative auf UNIX-Systemen ist es, die OTF-Dateien für [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [STIX](https://github.com/stipub/stixfonts) in einem lokalen Schriftartenordner zu installieren und, falls erforderlich, `fc-cache` darauf auszuführen. Auf macOS und Linux sind die Standardpfade `~/Library/Fonts/` bzw. `~/.fonts`.

### Schriften mit einer MATH-Tabelle

Sie können tatsächlich jede [mathematische OpenType-Schriftart](https://fred-wang.github.io/MathFonts/) installieren und für MathML-Darstellung verwenden. Einige Browser bieten eine Möglichkeit, die Standardschriftart für MathML in ihrem Schriftarten-Menü zu konfigurieren. Alternativ können Sie das [MathML-fontsettings Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-font-settings/) ausprobieren.

- [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)
- [Cambria Math](https://learn.microsoft.com/en-us/typography/font-list/?FID=360)
- [DejaVu Math TeX Gyre](https://sourceforge.net/projects/dejavu/files/dejavu/)
- [Garamond Math](https://github.com/YuanshengZhao/Garamond-Math)
- [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math)
- [Libertinus Math](https://github.com/alerque/libertinus)
- [STIX Math](https://github.com/stipub/stixfonts)
- [TeX Gyre Bonum Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Bonum_Math)
- [TeX Gyre Pagella Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Pagella_Math)
- [TeX Gyre Schola Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Schola_Math)
- [TeX Gyre Termes Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Termes_Math)
- [XITS Math](https://github.com/aliftype/xits/releases)
- [Fira Math](https://github.com/firamath/firamath)
- [GFS Neohellenic Math](https://greekfontsociety-gfs.gr/typefaces/Math)
