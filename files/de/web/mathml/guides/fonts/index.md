---
title: Schriftarten für MathML
short-title: Fonts
slug: Web/MathML/Guides/Fonts
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

Schriftarten mit angemessener Unicode-Abdeckung und Open Font Format-Funktionen sind erforderlich, um eine gute Mathematik-Darstellung zu erzielen. Diese Seite beschreibt, wie Benutzer solche Mathematik-Schriftarten installieren können, um MathML korrekt in Browsern anzuzeigen.

## Installationsanweisungen

Als allgemeine Faustregel wird empfohlen, sowohl _Latin Modern Math_ (das den für mathematische Formeln beliebten [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern) Stil verwendet) als auch _STIX Two Math_ (das eine große Unicode-Abdeckung für wissenschaftliche Zeichen hat) zu installieren. In den folgenden Abschnitten finden Sie detaillierte Anweisungen zur Installation dieser Schriftarten auf verschiedenen Betriebssystemen.

### Windows

Installieren Sie die Schriftarten _Latin Modern Math_ und _STIX Two Math_ wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Öffnen Sie das ZIP-Archiv, wechseln Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Dort finden Sie die `latinmodern-math` Schriftdatei.
3. Öffnen Sie die `latinmodern-math` Schriftdatei und klicken Sie auf die **Installieren**-Schaltfläche.
4. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
5. Öffnen Sie das ZIP-Archiv `static_otf.zip` und wechseln Sie dann in das Verzeichnis `static_otf`. Unter den dort befindlichen Dateien finden Sie eine `STIXTwoMath-Regular` Datei.
6. Öffnen Sie die `STIXTwoMath-Regular` Datei und klicken Sie auf die **Installieren**-Schaltfläche. Wenn gewünscht, können Sie dies auch für die anderen Schriftdateien im Verzeichnis tun.

> **Note:** _Cambria Math_ ist standardmäßig auf Windows installiert und sollte eine relativ gute MathML-Darstellung gewährleisten.

### macOS

Installieren Sie die Schriftart _Latin Modern Math_ wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Extrahieren Sie das ZIP-Archiv, wechseln Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Dort finden Sie die `latinmodern-math` Schriftdatei.
3. Doppelklicken Sie auf die `latinmodern-math` Schriftdatei und klicken Sie im sich öffnenden Fenster auf die Schaltfläche **Schrift installieren**.

> [!NOTE]
> Wenn Sie macOS Ventura (Version 13) oder höher verwenden, ist _STIX Two Math_ bereits vorinstalliert und Sie können die folgenden Schritte überspringen.

Installieren Sie die Schriftart _STIX Two Math_ wie folgt:

1. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Öffnen Sie das ZIP-Archiv `static_otf.zip`, und wechseln Sie dann in das Verzeichnis `static_otf`. Unter den dort befindlichen Dateien finden Sie eine `STIXTwoMath-Regular.otf` Datei.
3. Öffnen Sie die `STIXTwoMath-Regular.otf` Datei und klicken Sie im sich öffnenden Fenster auf die Schaltfläche **Schrift installieren**. Wenn gewünscht, können Sie dies auch für die anderen Schriftdateien im Verzeichnis tun.

> [!NOTE]
> Eine veraltete Version von _STIX_ ist ab OS X Lion (Version 10.7) vorinstalliert. Obwohl einige Browser in der Lage sind, diese Version zu nutzen, wird dringend empfohlen, die obigen Anweisungen für eine optimale Mathematik-Darstellung zu befolgen.

### Linux

Unten finden Sie Befehle, die auf beliebten Linux-Distributionen ausgeführt werden können, um die Schriftarten _Latin Modern Math_ und _STIX Two Math_ über Ihren Paketmanager zu installieren. Alternative Ansätze werden ebenfalls bereitgestellt, falls Ihre Linux-Distribution keine speziellen Pakete für diese Schriftarten bereitstellt.

#### Auf Debian-basierte Distributionen (einschließlich Ubuntu und Mint)

```bash
sudo apt-get install fonts-lmodern fonts-stix
```

#### Auf Fedora-basierte Distributionen

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

#### Auf openSUSE-basierte Distributionen

```bash
sudo zypper install texlive-lm-math stix-fonts
```

#### Auf Arch Linux

```bash
sudo pacman -S otf-latinmodern-math otf-stix
```

#### TeXLive Pakete

Wenn Ihre Linux-Distribution keine Pakete für die Schriften _Latin Modern Math_ und _STIX_ bereitstellt, sollten Sie stattdessen die `texlive` Pakete installieren, die die Schriften _Latin Modern Math_ und _XITS_ enthalten. Zum Beispiel auf Mageia:

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

Allerdings müssen Sie wahrscheinlich sicherstellen, dass diese Schriften Ihrem System bekannt sind. Fügen Sie eine fontconfig-Konfiguration `/etc/fonts/conf.avail/09-texlive-fonts.conf` hinzu, die auf das `opentype` Verzeichnis von TeXLive zeigt, wie zum Beispiel:

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

Fügen Sie schließlich diese Konfigurationsdatei zur Systemschriftartliste hinzu und regenerieren Sie den fontconfig-Cache:

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### Upstream-Pakete

Wenn auf Ihren Linux-Distributionen keine Pakete verfügbar sind, oder wenn Sie einfach nur Upstream-Pakete installieren möchten, versuchen Sie es damit:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Erstellen Sie ein Verzeichnis `~/.fonts`, falls es noch nicht existiert, und legen Sie `latinmodern-math.otf` und `STIXTwoMath-Regular.otf` in diesem Verzeichnis ab.
3. Führen Sie `fc-cache -f` aus, um den fontconfig-Cache zu regenerieren.

### Android

Sie müssen das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) verwenden.

Noto Sans Math bietet eine gute Unicode-Abdeckung für mathematische Symbole und [mathematische Layouts](https://github.com/notofonts/math/blob/main/documentation/building-math-fonts/index.md).

### Andere Systeme

Auf anderen Systemen sollten Sie in Erwägung ziehen, eine [Schriftart mit einem MATH-Tabelle](#schriftarten_mit_einer_math-tabelle) mit Ihrem Paketmanager zu installieren. Beachten Sie, dass diese Schriftarten in der Regel mit TeX-Distributionen wie [TeX Live](https://www.tug.org/texlive/) geliefert werden, Sie jedoch möglicherweise spezifische Anweisungen befolgen müssen, damit Ihr System die Schriftarten erkennt. Als letzte Instanz installieren Sie das [MathML fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/).

## Erweiterte Einrichtung

In den nächsten Abschnitten finden Sie weitere nützliche Tipps zur Installation und Konfiguration von Schriftarten für MathML.

### Arabische mathematische alphabetische Symbole

Derzeit haben sehr wenige Schriftarten geeignete Glyphen für die arabischen mathematischen alphabetischen Symbole. Wenn Sie wahrscheinlich diese Zeichen benötigen, empfehlen wir, die _XITS_ oder [Amiri](https://aliftype.com/amiri/) Schriftarten zu installieren.

### Installation ohne Administratorrechte

Wenn Sie Schriftarten auf einem System ohne Administratorrechte installieren müssen, ist die einfachste Möglichkeit die Verwendung der Mathematik-Schriftart des [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/). Beachten Sie, dass die Verwendung des Add-ons nicht optimal ist, da es Ihren Gecko-Browser zwingt, ein CSS-Stylesheet auf jeder besuchten Seite zu laden sowie Web-Mathematik-Schriftarten auf allen Seiten mit MathML-Inhalten.

Eine bessere Alternative auf UNIX-Systemen ist es, die OTF-Dateien für [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [STIX](https://github.com/stipub/stixfonts) in ein lokales Schriftartenverzeichnis zu installieren und (falls notwendig) `fc-cache` darauf auszuführen. Unter macOS und Linux sind die Standardpfade jeweils `~/Library/Fonts/` und `~/.fonts`.

### Schriftarten mit einer MATH-Tabelle

Sie können tatsächlich jede [mathematische OpenType-Schriftart](https://fred-wang.github.io/MathFonts/) installieren und sie für die MathML-Darstellung verwenden. Einige Browser bieten eine Möglichkeit, die Standardschriftart für MathML in ihrem Schriftarten-Einstellungsmenü zu konfigurieren. Alternativ können Sie das [MathML Font Settings Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-font-settings/) ausprobieren.

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
